import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6wxn2day.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6wxn2day"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pentagon-dashed-solid"} {...others} />);
}

export default Component;
