import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqvm3jumk.css';
import '../../css/x/x2fozm4ep.css';
import '../../css/f/fqwabbb6w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xqvm3jumk"/><path class="x2fozm4ep"/><path class="fqwabbb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:business"} {...others} />);
}

export default Component;
