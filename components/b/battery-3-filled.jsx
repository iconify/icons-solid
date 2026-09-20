import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcw8iw7rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcw8iw7rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:battery-3-filled"} {...others} />);
}

export default Component;
