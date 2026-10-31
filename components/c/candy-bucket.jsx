import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n99u5-bno.css';
import '../../css/i/i7eg65b6e.css';
import '../../css/u/ujn-f1vfa.css';
import '../../css/o/ojz0drb0s.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="n99u5-bno"/><path class="i7eg65b6e wm-shine"/><path class="ujn-f1vfa wm-k"/><path class="ojz0drb0s wm-a"/><path class="uooj9_soa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:candy-bucket"} {...others} />);
}

export default Component;
