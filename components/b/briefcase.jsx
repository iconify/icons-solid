import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jtlku6jtp.css';
import '../../css/c/c98ig1y1j.css';
import '../../css/c/cb-0jbc1e.css';
import '../../css/w/w32wt29uz.css';
import '../../css/b/b6q64qb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVGJiScbW" x1="9" x2="15" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVGJiScbW)" class="jtlku6jtp"/><path class="c98ig1y1j wm-a"/><path class="cb-0jbc1e wm-shine"/><path class="w32wt29uz wm-shine"/><path class="b6q64qb3e wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:briefcase"} {...others} />);
}

export default Component;
