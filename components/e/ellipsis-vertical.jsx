import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbncdkb9d.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="rbncdkb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:ellipsis-vertical"} {...others} />);
}

export default Component;
