import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3ggk_8xs.css';
import '../../css/k/kmyfn0x9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w3ggk_8xs"/><path class="kmyfn0x9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:music-on-off-1"} {...others} />);
}

export default Component;
