import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9w8p9bcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b9w8p9bcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:trouser-line"} {...others} />);
}

export default Component;
