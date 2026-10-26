import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xcjp2cckf.css';
import '../../css/d/d6821-qbu.css';
import '../../css/a/av98c0-1h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="xcjp2cckf"/><path class="d6821-qbu"/><path class="av98c0-1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:santa-hat"} {...others} />);
}

export default Component;
