import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me1w258bl.css';
import '../../css/e/e0ia1ccfv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="me1w258bl"/><path class="e0ia1ccfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flint"} {...others} />);
}

export default Component;
