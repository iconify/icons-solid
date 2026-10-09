import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rof69hb0s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rof69hb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:countryside-48-bold"} {...others} />);
}

export default Component;
