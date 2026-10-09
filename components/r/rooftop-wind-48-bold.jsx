import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxyxiyghr.css';
import '../../css/s/sfxp0kb0z.css';
import '../../css/t/t8xwk4b6x.css';
import '../../css/y/ygyep7bda.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vxyxiyghr"/><path class="sfxp0kb0z"/><path class="t8xwk4b6x"/><path class="ygyep7bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rooftop-wind-48-bold"} {...others} />);
}

export default Component;
