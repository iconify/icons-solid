import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vzsgn-bnl.css';
import '../../css/v/ve0rpn2mj.css';
import '../../css/n/nbat85bsj.css';
import '../../css/s/s0our-azd.css';
import '../../css/y/y9j78lb_u.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vzsgn-bnl"/><path class="ve0rpn2mj"/><path class="nbat85bsj"/><path class="s0our-azd"/><path class="y9j78lb_u"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:down-up-circle"} {...others} />);
}

export default Component;
