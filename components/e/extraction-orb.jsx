import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3m_y-zfi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c3m_y-zfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:extraction-orb"} {...others} />);
}

export default Component;
