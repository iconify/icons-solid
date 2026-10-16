import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwexvhbyv.css';
import '../../css/b/bau8ix_ox.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hwexvhbyv"/><path class="bau8ix_ox"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:industrial-boiler-48"} {...others} />);
}

export default Component;
