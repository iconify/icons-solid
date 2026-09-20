import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy8_nmbyv.css';
import '../../css/c/c7mlw_bkb.css';

const viewBox = {"width":418,"height":150};
const content = `<path class="xy8_nmbyv"/><path class="c7mlw_bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:capital-one"} {...others} />);
}

export default Component;
