import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8m7-jz1u.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="u8m7-jz1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:bolt-slash-fill"} {...others} />);
}

export default Component;
