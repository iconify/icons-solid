import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5hhk_blw.css';
import '../../css/x/x03n-xhgu.css';
import '../../css/v/v67m5-lov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q5hhk_blw"/><path class="x03n-xhgu"/><path class="v67m5-lov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bithumb"} {...others} />);
}

export default Component;
