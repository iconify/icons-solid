import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlbgi5b-g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rlbgi5b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pent-no-dark"} {...others} />);
}

export default Component;
