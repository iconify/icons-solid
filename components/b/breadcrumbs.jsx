import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jt1bocdew.css';
import '../../css/t/t8pjgcb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jt1bocdew"/><path vector-effect="non-scaling-stroke" class="t8pjgcb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:breadcrumbs"} {...others} />);
}

export default Component;
