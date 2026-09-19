import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpd4zl64s.css';
import '../../css/w/w9yaz1b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpd4zl64s"/><path class="w9yaz1b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microwave-oven"} {...others} />);
}

export default Component;
