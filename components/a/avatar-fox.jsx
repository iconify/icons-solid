import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hsoaook0r.css';
import '../../css/f/fqxf_cbxw.css';
import '../../css/i/ipq0p851b.css';
import '../../css/p/p2-1p88xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hsoaook0r wm-shadow"/><path class="fqxf_cbxw wm-shadow"/><path class="ipq0p851b"/><path class="p2-1p88xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-fox"} {...others} />);
}

export default Component;
