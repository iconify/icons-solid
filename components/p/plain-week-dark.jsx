import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwc1l2bfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gwc1l2bfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plain-week-dark"} {...others} />);
}

export default Component;
