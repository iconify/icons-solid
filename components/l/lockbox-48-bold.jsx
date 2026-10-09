import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlhsvkb_y.css';
import '../../css/p/pkf1_sbdg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hlhsvkb_y"/><path class="pkf1_sbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockbox-48-bold"} {...others} />);
}

export default Component;
