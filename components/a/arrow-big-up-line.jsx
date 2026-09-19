import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyi5vz6mm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oyi5vz6mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-big-up-line"} {...others} />);
}

export default Component;
