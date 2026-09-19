import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/l/l3yvqyb3n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="kb9zbkb1z"/><path class="l3yvqyb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flashlamp"} {...others} />);
}

export default Component;
