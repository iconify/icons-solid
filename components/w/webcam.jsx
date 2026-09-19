import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g1st-obsh.css';
import '../../css/s/sm1jugbqc.css';
import '../../css/y/ytopibb5c.css';
import '../../css/c/c1ksu6uqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="g1st-obsh"/><path class="sm1jugbqc"/><circle class="ytopibb5c"/><path class="c1ksu6uqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:webcam"} {...others} />);
}

export default Component;
