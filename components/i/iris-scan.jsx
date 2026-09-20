import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aoy57sbik.css';
import '../../css/n/n55lvqpox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aoy57sbik"/><path class="n55lvqpox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:iris-scan"} {...others} />);
}

export default Component;
