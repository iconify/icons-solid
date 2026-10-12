import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b68xxsbdc.css';
import '../../css/q/qs2jqdb-s.css';
import '../../css/j/j46k23i9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b68xxsbdc"/><path class="qs2jqdb-s"/><path class="j46k23i9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dna-48"} {...others} />);
}

export default Component;
