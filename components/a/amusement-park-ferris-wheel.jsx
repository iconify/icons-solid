import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kgtiopk3b.css';
import '../../css/n/nivrvsons.css';
import '../../css/q/q3oymybho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kgtiopk3b"/><path class="nivrvsons"/><path class="q3oymybho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:amusement-park-ferris-wheel"} {...others} />);
}

export default Component;
