import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vihkhzb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vihkhzb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:plane-landing"} {...others} />);
}

export default Component;
