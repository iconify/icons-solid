import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2ze5rb0t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i2ze5rb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:flag"} {...others} />);
}

export default Component;
