import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbn8jqf1h.css';
import '../../css/b/b0cn2mb5s.css';
import '../../css/c/ct59a3bzk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbn8jqf1h"/><path class="b0cn2mb5s"/><path class="ct59a3bzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:police-station-20-bold"} {...others} />);
}

export default Component;
