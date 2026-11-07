import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0qokrk2d.css';
import '../../css/h/h4x0vob4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0qokrk2d"/><path class="h4x0vob4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hearts-bold-duotone"} {...others} />);
}

export default Component;
