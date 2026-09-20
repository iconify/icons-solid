import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/af8_b-b2s.css';
import '../../css/o/outs05h4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="af8_b-b2s"/><path class="outs05h4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:nodesj-logo"} {...others} />);
}

export default Component;
