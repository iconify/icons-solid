import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xas18pb7n.css';
import '../../css/o/o_jac7o0o.css';
import '../../css/k/k5lm9_b8y.css';
import '../../css/z/zwcc34jgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xas18pb7n"/><path class="o_jac7o0o"/><path class="k5lm9_b8y"/><path class="zwcc34jgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:accounting-abacus"} {...others} />);
}

export default Component;
