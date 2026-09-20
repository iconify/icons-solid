import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg1ehhb9u.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tg1ehhb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:elevator-14"} {...others} />);
}

export default Component;
