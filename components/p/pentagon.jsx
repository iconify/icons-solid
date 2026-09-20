import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azi51ub6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azi51ub6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pentagon"} {...others} />);
}

export default Component;
