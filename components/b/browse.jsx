import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgoytn7ay.css';
import '../../css/v/vyj6x83we.css';
import '../../css/n/n640z91ql.css';
import '../../css/h/hwe3wrb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kgoytn7ay"/><path class="vyj6x83we"/><path class="n640z91ql"/><path class="hwe3wrb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:browse"} {...others} />);
}

export default Component;
