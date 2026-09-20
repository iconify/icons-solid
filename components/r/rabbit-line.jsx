import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0w3pxcur.css';
import '../../css/h/h0rooab0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0w3pxcur"/><path class="h0rooab0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rabbit-line"} {...others} />);
}

export default Component;
