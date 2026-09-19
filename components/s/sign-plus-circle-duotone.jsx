import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe2y8tblj.css';
import '../../css/j/jpauy220p.css';
import '../../css/a/avwlpjbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="pe2y8tblj"/><circle class="jpauy220p"/><path class="avwlpjbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-plus-circle-duotone"} {...others} />);
}

export default Component;
