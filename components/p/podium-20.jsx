import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnazeqbdf.css';
import '../../css/v/vihqj-brq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lnazeqbdf"/><path class="vihqj-brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:podium-20"} {...others} />);
}

export default Component;
