import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mf3vz4bbl.css';
import '../../css/e/e72pf88yi.css';
import '../../css/y/y01ji0mmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mf3vz4bbl"/><path class="e72pf88yi"/><path class="y01ji0mmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-secure-02"} {...others} />);
}

export default Component;
