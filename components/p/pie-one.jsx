import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/v/v3v0lfcyv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="kb9zbkb1z"/><path class="v3v0lfcyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pie-one"} {...others} />);
}

export default Component;
