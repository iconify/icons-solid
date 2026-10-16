import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icg_7_b4w.css';
import '../../css/y/y7lbhg29g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="icg_7_b4w"/><path class="y7lbhg29g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-boost-48-bold"} {...others} />);
}

export default Component;
