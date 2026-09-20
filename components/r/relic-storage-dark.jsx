import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk_s0qb8u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hk_s0qb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:relic-storage-dark"} {...others} />);
}

export default Component;
