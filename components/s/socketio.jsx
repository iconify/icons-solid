import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx6tlvbkb.css';
import '../../css/u/uk9yq28xx.css';
import '../../css/d/d3ye85bme.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="tx6tlvbkb"><path class="uk9yq28xx"/><path class="d3ye85bme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:socketio"} {...others} />);
}

export default Component;
