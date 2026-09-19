import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txy7xkb8z.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="txy7xkb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-fill-badge-xmark"} {...others} />);
}

export default Component;
