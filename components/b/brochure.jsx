import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fqp4acb6t.css';
import '../../css/u/u49h73p9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fqp4acb6t"/><path class="u49h73p9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brochure"} {...others} />);
}

export default Component;
