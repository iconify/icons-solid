import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlnqvbmke.css';
import '../../css/l/lse9ls9yk.css';
import '../../css/o/oexr3lztj.css';
import '../../css/x/x8m_9guzj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vlnqvbmke"/><path class="lse9ls9yk"/><path class="oexr3lztj"/><path class="x8m_9guzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microscope-48"} {...others} />);
}

export default Component;
