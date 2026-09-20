import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsll_2ggj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsll_2ggj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-magnify"} {...others} />);
}

export default Component;
