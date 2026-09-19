import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/e/ew_-ff-vl.css';
import '../../css/g/gs13yqz0b.css';
import '../../css/l/ljv3ubx8d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="ew_-ff-vl"/><path class="gs13yqz0b"/><path class="ljv3ubx8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-vertical-left"} {...others} />);
}

export default Component;
