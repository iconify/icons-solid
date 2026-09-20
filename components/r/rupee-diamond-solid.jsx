import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqpg00fgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqpg00fgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rupee-diamond-solid"} {...others} />);
}

export default Component;
