import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1n2isbof.css';
import '../../css/m/mn36lt97b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d1n2isbof"/><path class="mn36lt97b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:self-care"} {...others} />);
}

export default Component;
