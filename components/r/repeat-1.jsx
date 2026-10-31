import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ij_6_ebmi.css';
import '../../css/j/jtfn8to7b.css';
import '../../css/p/pn9ne302f.css';
import '../../css/u/uly1kib_i.css';
import '../../css/o/osnzy84dj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ij_6_ebmi wm-shadow"/><path class="jtfn8to7b wm-shadow"/><path class="pn9ne302f"/><path class="uly1kib_i"/><path class="osnzy84dj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:repeat-1"} {...others} />);
}

export default Component;
