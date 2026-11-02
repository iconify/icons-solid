import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p667ec9ue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p667ec9ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:house-plus-fill"} {...others} />);
}

export default Component;
