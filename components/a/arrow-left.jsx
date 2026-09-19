import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjdv0xboy.css';

const viewBox = {"width":380,"height":790};
const content = `<path class="qjdv0xboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:arrow-left"} {...others} />);
}

export default Component;
