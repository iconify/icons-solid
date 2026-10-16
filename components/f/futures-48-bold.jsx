import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv_yx13wf.css';
import '../../css/q/qllhpcbbe.css';
import '../../css/i/icx4yywmx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xv_yx13wf"/><path class="qllhpcbbe"/><path class="icx4yywmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:futures-48-bold"} {...others} />);
}

export default Component;
