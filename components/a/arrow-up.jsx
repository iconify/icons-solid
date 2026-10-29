import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ml2kkc2to.css';
import '../../css/c/c53knpb4e.css';
import '../../css/k/ke6u_673h.css';
import '../../css/y/y129f9bjv.css';
import '../../css/k/k51ebbb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ml2kkc2to wm-deco"/><path class="c53knpb4e wm-k"/><path class="ke6u_673h wm-k"/><path class="wm-k y129f9bjv"/><path class="k51ebbb6x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-up"} {...others} />);
}

export default Component;
