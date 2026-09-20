import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol6do99bk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ol6do99bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:view-split-horizontal"} {...others} />);
}

export default Component;
