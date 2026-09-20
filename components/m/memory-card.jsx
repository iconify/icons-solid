import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ys7_ulb1x.css';
import '../../css/a/a9hgvjujd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ys7_ulb1x"/><path class="a9hgvjujd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:memory-card"} {...others} />);
}

export default Component;
