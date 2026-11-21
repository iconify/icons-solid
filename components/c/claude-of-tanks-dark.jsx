import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3sii4bxj.css';
import '../../css/e/e2qjp_beg.css';

const viewBox = {"width":9956,"height":700,"left":55,"top":142};
const content = `<path class="w3sii4bxj"/><path class="e2qjp_beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:claude-of-tanks-dark"} {...others} />);
}

export default Component;
