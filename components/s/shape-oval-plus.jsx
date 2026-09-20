import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etw_cjf_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etw_cjf_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shape-oval-plus"} {...others} />);
}

export default Component;
