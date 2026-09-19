import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgc4y1zlz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgc4y1zlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-down-1-thin"} {...others} />);
}

export default Component;
