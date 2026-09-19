import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3wulz8oa.css';
import '../../css/d/d-_39cbuw.css';
import '../../css/i/iomhpyiaf.css';
import '../../css/s/svg0ombue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m3wulz8oa"/><path class="d-_39cbuw"/><path class="iomhpyiaf"/><path class="svg0ombue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:diploma"} {...others} />);
}

export default Component;
