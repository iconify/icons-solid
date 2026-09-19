import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inixre9_y.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="inixre9_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:envelope-badge-fill"} {...others} />);
}

export default Component;
