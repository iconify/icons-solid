import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v331ncoop.css';
import '../../css/o/oe6jpabdk.css';
import '../../css/x/xy26lsb4d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v331ncoop"/><path class="oe6jpabdk"/><path class="xy26lsb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:perplexity-ai"} {...others} />);
}

export default Component;
