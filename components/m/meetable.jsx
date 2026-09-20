import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph5l2_t_x.css';
import '../../css/i/i70tju1pk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ph5l2_t_x"/><path class="i70tju1pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:meetable"} {...others} />);
}

export default Component;
