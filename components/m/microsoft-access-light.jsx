import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh-xzbcdv.css';
import '../../css/j/jonqcrbqb.css';
import '../../css/v/ve153ofso.css';
import '../../css/t/tze0h7nir.css';
import '../../css/p/p6wj9kbjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uh-xzbcdv"/><path class="jonqcrbqb"/><path class="ve153ofso"/><path class="tze0h7nir"/><path class="p6wj9kbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-access-light"} {...others} />);
}

export default Component;
