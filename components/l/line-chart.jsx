import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzk2onifa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzk2onifa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:line-chart"} {...others} />);
}

export default Component;
