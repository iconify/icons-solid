import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yenxbdjsp.css';

const viewBox = {"width":910,"height":1026};
const content = `<path class="yenxbdjsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:drwho"} {...others} />);
}

export default Component;
