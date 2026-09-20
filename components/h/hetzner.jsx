import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv0s7yb0o.css';
import '../../css/d/da9g56non.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="rv0s7yb0o"/><path class="da9g56non"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hetzner"} {...others} />);
}

export default Component;
