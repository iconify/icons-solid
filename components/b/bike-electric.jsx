import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lzm7kvups.css';
import '../../css/a/a-z24ibwd.css';
import '../../css/k/kctaqhqoj.css';
import '../../css/q/q8ijdsmrx.css';
import '../../css/g/gb0ft43tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="lzm7kvups"/><circle class="a-z24ibwd"/><path class="kctaqhqoj"/><path class="q8ijdsmrx"/><path class="gb0ft43tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:bike-electric"} {...others} />);
}

export default Component;
