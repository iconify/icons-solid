import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtmjq4l9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtmjq4l9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:volume-down-solid"} {...others} />);
}

export default Component;
