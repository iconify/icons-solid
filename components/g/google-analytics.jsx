import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h22y-lv-g.css';
import '../../css/f/fwk_nlbjb.css';

const viewBox = {"width":2195.9,"height":2430.9};
const content = `<path class="h22y-lv-g"/><path class="fwk_nlbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:google-analytics"} {...others} />);
}

export default Component;
