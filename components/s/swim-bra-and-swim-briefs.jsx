import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iikbevq3d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iikbevq3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:swim-bra-and-swim-briefs"} {...others} />);
}

export default Component;
