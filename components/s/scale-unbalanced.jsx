import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m16-f66mn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m16-f66mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:scale-unbalanced"} {...others} />);
}

export default Component;
