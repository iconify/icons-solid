import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyf7383ma.css';
import '../../css/o/o703l3o2b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nyf7383ma"/><path class="o703l3o2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wish-com"} {...others} />);
}

export default Component;
