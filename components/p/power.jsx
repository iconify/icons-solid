import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esqg6lffk.css';
import '../../css/m/m_dyr3b-l.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="esqg6lffk"/><path class="m_dyr3b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:power"} {...others} />);
}

export default Component;
