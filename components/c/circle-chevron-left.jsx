import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f31j-cpil.css';
import '../../css/g/grw0dgbik.css';
import '../../css/o/oajhruw5p.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/i/i7tbmsb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f31j-cpil wm-k"/><path class="grw0dgbik wm-k"/><path class="oajhruw5p wm-k"/><path class="rjg00-qxz wm-shine"/><path class="i7tbmsb-i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-chevron-left"} {...others} />);
}

export default Component;
