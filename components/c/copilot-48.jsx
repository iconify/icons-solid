import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdh5ety7c.css';
import '../../css/k/ktbpolgkg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hdh5ety7c"/><path class="ktbpolgkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copilot-48"} {...others} />);
}

export default Component;
