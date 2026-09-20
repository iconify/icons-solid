import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bha5ecbwn.css';
import '../../css/p/p078on3jf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bha5ecbwn"/><path clip-rule="evenodd" class="p078on3jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ronin"} {...others} />);
}

export default Component;
