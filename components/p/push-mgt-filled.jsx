import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdf1hubnu.css';
import '../../css/f/f69nz6bai.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kdf1hubnu"/><path clip-rule="evenodd" class="f69nz6bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:push-mgt-filled"} {...others} />);
}

export default Component;
