import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oddsq5b1n.css';
import '../../css/h/htdwqnb8t.css';
import '../../css/z/z0n64jbsa.css';
import '../../css/d/d19e9sbid.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oddsq5b1n"/><path class="htdwqnb8t"/><path class="z0n64jbsa"/><path class="d19e9sbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-cable-48"} {...others} />);
}

export default Component;
