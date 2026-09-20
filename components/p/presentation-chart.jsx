import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyndi6n7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pyndi6n7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:presentation-chart"} {...others} />);
}

export default Component;
