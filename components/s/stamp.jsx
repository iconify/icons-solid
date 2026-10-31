import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/echsbn2pt.css';
import '../../css/s/spne74bta.css';
import '../../css/f/f8502mero.css';
import '../../css/y/yuzg1mofy.css';
import '../../css/a/afph40bky.css';
import '../../css/e/eiuxgcbzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="echsbn2pt wm-shadow"/><path class="spne74bta wm-shadow"/><path class="f8502mero"/><path class="yuzg1mofy"/><path class="afph40bky"/><path class="eiuxgcbzv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:stamp"} {...others} />);
}

export default Component;
