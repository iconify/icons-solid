import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5jstv2qp.css';
import '../../css/u/uvian2ben.css';
import '../../css/p/p5n1y4wab.css';
import '../../css/h/hvka4mbsp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f5jstv2qp"/><path class="uvian2ben"/><path class="p5n1y4wab"/><path class="hvka4mbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:connection-bars"} {...others} />);
}

export default Component;
