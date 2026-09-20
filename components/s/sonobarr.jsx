import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndbkslbvb.css';
import '../../css/c/cdd4wcvmi.css';
import '../../css/e/eodm2abwd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ndbkslbvb"/><path class="cdd4wcvmi"/><path class="eodm2abwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonobarr"} {...others} />);
}

export default Component;
