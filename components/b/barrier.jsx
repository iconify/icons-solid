import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j3jil5c3a.css';
import '../../css/g/ghw9npx3a.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="j3jil5c3a"/><path class="ghw9npx3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:barrier"} {...others} />);
}

export default Component;
