import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fqwagjb6j.css';
import '../../css/c/cnuln6twg.css';
import '../../css/s/sfbrjpc4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="fqwagjb6j"/><circle class="cnuln6twg"/><path class="sfbrjpc4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-date"} {...others} />);
}

export default Component;
