import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa8mtjico.css';
import '../../css/l/l62m84s6k.css';
import '../../css/y/y-2ykkrlo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pa8mtjico"/><path class="l62m84s6k"/><path class="y-2ykkrlo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:manganese-48"} {...others} />);
}

export default Component;
