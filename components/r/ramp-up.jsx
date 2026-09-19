import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dudf2xb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dudf2xb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:ramp-up"} {...others} />);
}

export default Component;
