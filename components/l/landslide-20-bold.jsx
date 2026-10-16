import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5hn9ec-l.css';
import '../../css/r/r_ps52b0k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z5hn9ec-l"/><path class="r_ps52b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landslide-20-bold"} {...others} />);
}

export default Component;
