import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrn74jbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrn74jbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:archive-arrow-down-outline"} {...others} />);
}

export default Component;
