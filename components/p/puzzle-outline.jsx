import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltmuz0bob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltmuz0bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:puzzle-outline"} {...others} />);
}

export default Component;
