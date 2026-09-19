import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l9hplwb4s.css';
import '../../css/o/o49mt59vz.css';
import '../../css/u/uv10-xb0c.css';
import '../../css/l/ltjbqib6c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l9hplwb4s"/><path class="o49mt59vz"/><circle class="uv10-xb0c"/><circle class="ltjbqib6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ambulance"} {...others} />);
}

export default Component;
