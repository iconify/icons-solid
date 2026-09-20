import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pio0e7bsu.css';
import '../../css/w/wdohmybjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pio0e7bsu"/><path class="wdohmybjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:id-card"} {...others} />);
}

export default Component;
