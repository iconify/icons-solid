import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2ar__b5k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v2ar__b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:lattice-tower-with-ball-tip-antenna-on-ground-with-beams"} {...others} />);
}

export default Component;
