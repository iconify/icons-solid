import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz9gb9bqr.css';
import '../../css/r/rndnw4b9p.css';
import '../../css/x/xray__lap.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="uz9gb9bqr"/><path class="rndnw4b9p"/><path class="xray__lap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:baggage-claim"} {...others} />);
}

export default Component;
