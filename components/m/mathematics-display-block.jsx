import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7znt3bmm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n7znt3bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:mathematics-display-block"} {...others} />);
}

export default Component;
