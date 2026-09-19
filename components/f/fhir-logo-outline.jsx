import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nnjq4tb9x.css';
import '../../css/c/c7flqrulw.css';
import '../../css/l/lx0v1-bxn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nnjq4tb9x"/><path clip-rule="evenodd" class="c7flqrulw"/><path class="lx0v1-bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fhir-logo-outline"} {...others} />);
}

export default Component;
