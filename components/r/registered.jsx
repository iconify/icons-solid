import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyu5r4bdv.css';
import '../../css/g/guh-_zb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cyu5r4bdv"/><path class="guh-_zb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:registered"} {...others} />);
}

export default Component;
