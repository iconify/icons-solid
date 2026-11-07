import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odp-njbud.css';
import '../../css/r/rxyy9rljh.css';
import '../../css/q/q5dzxvb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="odp-njbud"/><path class="rxyy9rljh"/><path class="q5dzxvb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-left-bold"} {...others} />);
}

export default Component;
