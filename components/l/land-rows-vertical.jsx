import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tct91jbjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tct91jbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:land-rows-vertical"} {...others} />);
}

export default Component;
