import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcwt57p0s.css';
import '../../css/x/xoykf8bsw.css';
import '../../css/q/qk7-h-neb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bcwt57p0s"/><path class="xoykf8bsw"/><path class="qk7-h-neb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-recycling-48"} {...others} />);
}

export default Component;
