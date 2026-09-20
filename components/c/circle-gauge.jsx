import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ry8v7ffhn.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/x/xzx4xfb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ry8v7ffhn"/><circle class="h_tsn8bxt"/><path class="xzx4xfb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-gauge"} {...others} />);
}

export default Component;
