import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt-hzv5tk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lt-hzv5tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:keyboard"} {...others} />);
}

export default Component;
