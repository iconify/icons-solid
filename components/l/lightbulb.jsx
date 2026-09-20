import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3s8zbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq3s8zbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:lightbulb"} {...others} />);
}

export default Component;
