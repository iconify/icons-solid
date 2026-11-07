import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd7x7gmgh.css';
import '../../css/r/r_ko2hb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sd7x7gmgh"/><path class="r_ko2hb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:infinite-bold-duotone"} {...others} />);
}

export default Component;
