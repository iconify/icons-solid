import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jav5dg_xf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jav5dg_xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:laraveljetstream"} {...others} />);
}

export default Component;
