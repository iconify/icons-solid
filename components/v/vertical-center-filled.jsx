import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsrrl1ges.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gsrrl1ges"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:vertical-center-filled"} {...others} />);
}

export default Component;
