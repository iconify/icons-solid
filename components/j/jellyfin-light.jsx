import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe2dg1bnz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pe2dg1bnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jellyfin-light"} {...others} />);
}

export default Component;
