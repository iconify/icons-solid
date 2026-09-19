import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9z5x9uch.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="z9z5x9uch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:play-fill"} {...others} />);
}

export default Component;
