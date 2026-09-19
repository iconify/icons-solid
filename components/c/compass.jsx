import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y9_aoebtb.css';
import '../../css/k/kcm6-g5cy.css';
import '../../css/x/xhkwppb_y.css';
import '../../css/h/hjntqfb9h.css';
import '../../css/d/djvs69bfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y9_aoebtb"/><path class="kcm6-g5cy"/><circle class="xhkwppb_y"/><path class="hjntqfb9h"/><path class="djvs69bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:compass"} {...others} />);
}

export default Component;
