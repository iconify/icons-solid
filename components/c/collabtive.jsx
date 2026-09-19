import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_5hb_i8b.css';

const viewBox = {"width":960,"height":1024};
const content = `<path class="g_5hb_i8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:collabtive"} {...others} />);
}

export default Component;
