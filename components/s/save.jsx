import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bq8rzkbds.css';
import '../../css/m/mmxhl-bkw.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/hlray_uja.css';
import '../../css/t/tzwk1-biw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bq8rzkbds"/><circle class="mmxhl-bkw"/><g class="ij2x_72vy"><path class="hlray_uja"/><circle class="tzwk1-biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:save"} {...others} />);
}

export default Component;
