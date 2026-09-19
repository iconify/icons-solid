import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvq0_2bsz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vvq0_2bsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:cog"} {...others} />);
}

export default Component;
