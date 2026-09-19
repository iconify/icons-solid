import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hkwu35btw.css';
import '../../css/o/o2--xo00n.css';
import '../../css/k/kmcbvkrhb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="hkwu35btw"/><path class="o2--xo00n"/></g><path class="kmcbvkrhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-on-stroke-16"} {...others} />);
}

export default Component;
