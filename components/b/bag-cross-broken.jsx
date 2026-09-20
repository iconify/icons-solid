import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dsua0qxhu.css';
import '../../css/s/sr5bgubyr.css';
import '../../css/b/buo1kubox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dsua0qxhu"/><path class="sr5bgubyr"/><path class="buo1kubox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-cross-broken"} {...others} />);
}

export default Component;
