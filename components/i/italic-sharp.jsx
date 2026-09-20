import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obw2w46mj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obw2w46mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:italic-sharp"} {...others} />);
}

export default Component;
