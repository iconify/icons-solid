import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xey_w_xxq.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="xey_w_xxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:tasks"} {...others} />);
}

export default Component;
