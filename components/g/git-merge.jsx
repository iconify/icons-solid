import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m6mbryb_c.css';
import '../../css/b/bbl26u-tv.css';
import '../../css/e/e_fbcwf2i.css';
import '../../css/m/m49qz1b7l.css';
import '../../css/n/nhzj3ja0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="m6mbryb_c"/><path class="bbl26u-tv"/><path class="e_fbcwf2i"/><path class="m49qz1b7l"/><path class="nhzj3ja0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-merge"} {...others} />);
}

export default Component;
