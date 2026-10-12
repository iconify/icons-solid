import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7p5pp0nv.css';
import '../../css/q/q0s0p9jij.css';
import '../../css/q/qqi_n9gdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y7p5pp0nv"/><path class="q0s0p9jij"/><path class="qqi_n9gdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pendulum"} {...others} />);
}

export default Component;
