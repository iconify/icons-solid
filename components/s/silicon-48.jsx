import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa8mtjico.css';
import '../../css/h/hzl2uybek.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pa8mtjico"/><path class="hzl2uybek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silicon-48"} {...others} />);
}

export default Component;
