import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv0hl_r7m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vv0hl_r7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:thumbs-up"} {...others} />);
}

export default Component;
