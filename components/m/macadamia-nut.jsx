import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gbytq-btb.css';
import '../../css/j/j-gbv-iht.css';
import '../../css/j/jncf--hba.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="gbytq-btb"/><path class="j-gbv-iht"/><path class="jncf--hba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:macadamia-nut"} {...others} />);
}

export default Component;
