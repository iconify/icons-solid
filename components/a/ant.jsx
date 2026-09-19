import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/najw6-2ug.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="najw6-2ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:ant"} {...others} />);
}

export default Component;
