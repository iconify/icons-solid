import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/faj5369wb.css';
import '../../css/e/edj87zvfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="faj5369wb"/><path class="edj87zvfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mortarboard-light"} {...others} />);
}

export default Component;
