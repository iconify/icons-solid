import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b83te_ldv.css';
import '../../css/e/e_7i3cbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b83te_ldv"/><path class="e_7i3cbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cursor-line-duotone"} {...others} />);
}

export default Component;
