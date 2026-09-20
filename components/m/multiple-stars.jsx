import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akp-j5wvb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="akp-j5wvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:multiple-stars"} {...others} />);
}

export default Component;
