import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3ffeyb2c.css';
import '../../css/q/q33bbjb-k.css';
import '../../css/e/e05kljyix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x3ffeyb2c"/><path class="q33bbjb-k"/><path class="e05kljyix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:truck-monster"} {...others} />);
}

export default Component;
