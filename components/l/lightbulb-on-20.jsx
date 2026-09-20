import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfvs7j2dg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfvs7j2dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lightbulb-on-20"} {...others} />);
}

export default Component;
