import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfx3nk7mg.css';
import '../../css/b/besfhw4wg.css';
import '../../css/e/e-0o8gbzc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wfx3nk7mg"/><path class="besfhw4wg"/><path class="e-0o8gbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:library-48"} {...others} />);
}

export default Component;
