import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgpe9kb6g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rgpe9kb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:bar-chart"} {...others} />);
}

export default Component;
