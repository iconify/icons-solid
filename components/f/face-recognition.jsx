import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sq396fsku.css';
import '../../css/d/d6s409x-u.css';
import '../../css/g/g1m7edbey.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="sq396fsku"/><path class="d6s409x-u"/><path class="g1m7edbey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:face-recognition"} {...others} />);
}

export default Component;
