import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4jy-5b2t.css';
import '../../css/n/nv93gbbuw.css';
import '../../css/t/ts07rybcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x4jy-5b2t"/><path class="nv93gbbuw"/><path class="ts07rybcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-ipv4"} {...others} />);
}

export default Component;
