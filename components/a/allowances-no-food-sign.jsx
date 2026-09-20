import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mk35_kbij.css';
import '../../css/o/o_uca4bwo.css';
import '../../css/p/psft0wb0o.css';
import '../../css/z/zwqelfbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mk35_kbij"/><path class="o_uca4bwo"/><path class="psft0wb0o"/><path class="zwqelfbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:allowances-no-food-sign"} {...others} />);
}

export default Component;
