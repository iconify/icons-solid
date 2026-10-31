import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fr2e1qcvy.css';
import '../../css/u/ueo_owbeo.css';
import '../../css/v/vac07x-bt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fr2e1qcvy wm-shadow"/><path class="ueo_owbeo wm-shadow"/><path class="vac07x-bt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wheat"} {...others} />);
}

export default Component;
