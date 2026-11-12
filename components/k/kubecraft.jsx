import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uky84zbnb.css';
import '../../css/e/ezzt541et.css';
import '../../css/p/ppsz4hbwg.css';
import '../../css/e/eldq07ydi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uky84zbnb"/><path class="ezzt541et"/><path class="ppsz4hbwg"/><path class="eldq07ydi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kubecraft"} {...others} />);
}

export default Component;
