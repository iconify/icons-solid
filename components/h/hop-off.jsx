import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xo5mc1bqc.css';
import '../../css/y/ygnab28px.css';
import '../../css/m/ml8inoh2i.css';
import '../../css/x/xuj16dbxi.css';
import '../../css/a/akm810o-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xo5mc1bqc"/><path class="ygnab28px"/><path class="ml8inoh2i"/><path class="xuj16dbxi"/><path class="akm810o-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hop-off"} {...others} />);
}

export default Component;
