import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt4xjd-hk.css';
import '../../css/t/t1afdnjzx.css';
import '../../css/w/w3-3et7oc.css';
import '../../css/m/m25up3bvl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tt4xjd-hk"/><path class="t1afdnjzx"/><path class="w3-3et7oc"/><path class="m25up3bvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:diving-mask"} {...others} />);
}

export default Component;
