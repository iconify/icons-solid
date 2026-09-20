import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn0xobb0g.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="kn0xobb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:zip-folder-solid"} {...others} />);
}

export default Component;
