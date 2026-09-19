import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syz0a_bgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="syz0a_bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-down-2"} {...others} />);
}

export default Component;
