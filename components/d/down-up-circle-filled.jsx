import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/v/vzsgn-bnl.css';
import '../../css/v/ve0rpn2mj.css';
import '../../css/n/nbat85bsj.css';
import '../../css/s/s0our-azd.css';
import '../../css/y/y9j78lb_u.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGR7nYMbUw"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="vzsgn-bnl"/><path class="ve0rpn2mj"/><path class="nbat85bsj"/><path class="s0our-azd"/><path class="y9j78lb_u"/></g></mask></defs><circle mask="url(#SVGR7nYMbUw)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:down-up-circle-filled"} {...others} />);
}

export default Component;
