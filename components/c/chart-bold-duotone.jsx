import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogok9o5lk.css';
import '../../css/w/wzlj4ldvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ogok9o5lk"/><path class="wzlj4ldvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-bold-duotone"} {...others} />);
}

export default Component;
