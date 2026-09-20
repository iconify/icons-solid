import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1-qcql6r.css';
import '../../css/i/ixgo5sb3w.css';
import '../../css/q/qyesjvbad.css';
import '../../css/r/rygpgz4rk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v1-qcql6r"/><path class="ixgo5sb3w"/><path class="qyesjvbad"/><path class="rygpgz4rk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:watermelon"} {...others} />);
}

export default Component;
