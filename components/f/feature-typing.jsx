import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5gbubc_q.css';
import '../../css/q/ql7ybibdx.css';
import '../../css/v/vfr8jsk1k.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="m5gbubc_q"/><circle class="ql7ybibdx"/><path class="vfr8jsk1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:feature-typing"} {...others} />);
}

export default Component;
