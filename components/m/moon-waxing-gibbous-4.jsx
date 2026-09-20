import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsa_t_p5s.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="nsa_t_p5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-waxing-gibbous-4"} {...others} />);
}

export default Component;
