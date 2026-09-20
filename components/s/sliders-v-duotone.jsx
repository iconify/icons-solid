import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiqh8os_h.css';
import '../../css/t/tgl2ebb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fiqh8os_h"/><path class="tgl2ebb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sliders-v-duotone"} {...others} />);
}

export default Component;
