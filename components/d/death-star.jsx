import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/b/bt6y-5bmv.css';
import '../../css/k/kid_vm7-j.css';
import '../../css/y/yi-i_vb8s.css';
import '../../css/w/wnbbxc35x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="kb9zbkb1z"/><path class="bt6y-5bmv"/><circle class="kid_vm7-j"/><path class="yi-i_vb8s"/><path class="wnbbxc35x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:death-star"} {...others} />);
}

export default Component;
