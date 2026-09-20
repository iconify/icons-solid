import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vnw5jbcnp.css';
import '../../css/j/j4jx0sbkj.css';
import '../../css/m/makbbdc0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vnw5jbcnp"/><path class="j4jx0sbkj"/><path class="makbbdc0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:donation-charity-donate-heart-flower"} {...others} />);
}

export default Component;
