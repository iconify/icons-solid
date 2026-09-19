import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/l/l5i5hyb3b.css';
import '../../css/o/ozd_fxwmk.css';
import '../../css/k/k6cs5ab0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><path class="l5i5hyb3b"/><path class="ozd_fxwmk"/><path class="k6cs5ab0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:refresh-circle"} {...others} />);
}

export default Component;
