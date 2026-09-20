import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kzwidabvb.css';
import '../../css/n/ng6yd7b6i.css';
import '../../css/o/o29vnjbds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kzwidabvb"/><path class="ng6yd7b6i"/><path class="o29vnjbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hearing-disability"} {...others} />);
}

export default Component;
