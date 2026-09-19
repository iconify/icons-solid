import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cty8jqbcu.css';
import '../../css/g/g5tny-ymz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cty8jqbcu"/><path class="g5tny-ymz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:electric-plugs"} {...others} />);
}

export default Component;
