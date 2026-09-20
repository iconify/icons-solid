import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydne_bc6v.css';
import '../../css/i/iwcyc_bei.css';
import '../../css/v/v_1d97bew.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ydne_bc6v"><path class="iwcyc_bei"/><path class="v_1d97bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:ai-generate-variation-spark"} {...others} />);
}

export default Component;
