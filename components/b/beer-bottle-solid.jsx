import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hot8poxda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hot8poxda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:beer-bottle-solid"} {...others} />);
}

export default Component;
