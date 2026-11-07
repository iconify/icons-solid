import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/an1auylmc.css';
import '../../css/r/r_kt-dgff.css';
import '../../css/e/eck4ylbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="an1auylmc"/><path class="r_kt-dgff"/><path class="eck4ylbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-heart-linear"} {...others} />);
}

export default Component;
