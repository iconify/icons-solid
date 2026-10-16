import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-7-2mbbf.css';
import '../../css/l/lp5-n4bth.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u-7-2mbbf"/><path class="lp5-n4bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ticket-check-48-bold"} {...others} />);
}

export default Component;
