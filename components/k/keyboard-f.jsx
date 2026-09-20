import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_q6c7r9z.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};
const content = `<path class="g_q6c7r9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:keyboard-f"} {...others} />);
}

export default Component;
