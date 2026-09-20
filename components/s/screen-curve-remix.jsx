import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag32xbb-x.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ag32xbb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:screen-curve-remix"} {...others} />);
}

export default Component;
