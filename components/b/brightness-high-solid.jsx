import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o56yifc7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o56yifc7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:brightness-high-solid"} {...others} />);
}

export default Component;
