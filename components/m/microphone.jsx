import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_wnb30-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_wnb30-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:microphone"} {...others} />);
}

export default Component;
