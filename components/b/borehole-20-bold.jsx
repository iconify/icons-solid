import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je7urx4cz.css';
import '../../css/f/fer_xybaw.css';
import '../../css/g/gbpfxs92l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="je7urx4cz"/><path class="fer_xybaw"/><path class="gbpfxs92l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:borehole-20-bold"} {...others} />);
}

export default Component;
