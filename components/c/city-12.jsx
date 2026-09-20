import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwmoieclp.css';
import '../../css/n/nwmn0mbtz.css';
import '../../css/r/rsyfj2bja.css';
import '../../css/r/rmh_gdpam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rwmoieclp"/><path class="nwmn0mbtz"/><path class="rsyfj2bja"/><path class="rmh_gdpam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-12"} {...others} />);
}

export default Component;
