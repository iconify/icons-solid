import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtf5akbqv.css';
import '../../css/c/c37etu0ab.css';
import '../../css/w/w4e8dubxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vtf5akbqv"/><path class="c37etu0ab"/><path class="w4e8dubxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-alt-duotone-line"} {...others} />);
}

export default Component;
