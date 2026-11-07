import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr5sybb7w.css';
import '../../css/c/cdhe4sbui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cr5sybb7w"/><path class="cdhe4sbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-next-bold-duotone"} {...others} />);
}

export default Component;
