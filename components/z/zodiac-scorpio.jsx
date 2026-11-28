import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qbqb8dbzx.css';
import '../../css/e/eluil0d0a.css';
import '../../css/q/q-vx2_fhp.css';
import '../../css/y/ynxylc7rt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qbqb8dbzx"/><path class="eluil0d0a"/><path class="q-vx2_fhp"/><path class="ynxylc7rt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-scorpio"} {...others} />);
}

export default Component;
