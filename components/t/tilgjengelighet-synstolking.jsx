import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_35gz5vf.css';
import '../../css/m/m2fk12xdu.css';
import '../../css/j/jj_zol4wm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_35gz5vf"/><path clip-rule="evenodd" class="m2fk12xdu"/><path class="jj_zol4wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tilgjengelighet-synstolking"} {...others} />);
}

export default Component;
