import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-cjo9ueo.css';
import '../../css/p/p5oqracae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-cjo9ueo"/><path class="p5oqracae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-line-chart"} {...others} />);
}

export default Component;
