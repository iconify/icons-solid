import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg0rhxb-u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="tg0rhxb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:town-hall"} {...others} />);
}

export default Component;
