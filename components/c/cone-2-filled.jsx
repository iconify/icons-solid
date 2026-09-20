import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjn0nvr9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hjn0nvr9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cone-2-filled"} {...others} />);
}

export default Component;
