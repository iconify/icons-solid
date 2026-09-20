import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x33k5bbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x33k5bbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cross-seed-dark"} {...others} />);
}

export default Component;
