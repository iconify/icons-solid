import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lscw_8blz.css';
import '../../css/c/cgqm05v5i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lscw_8blz"/><path class="cgqm05v5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reclaimerr-light"} {...others} />);
}

export default Component;
