import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe2y8tblj.css';
import '../../css/j/jpauy220p.css';
import '../../css/z/zw_tipbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="pe2y8tblj"/><circle class="jpauy220p"/><path class="zw_tipbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-minus-circle-duotone"} {...others} />);
}

export default Component;
