import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a24-d1bxs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a24-d1bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:emoji-grin-fill-20"} {...others} />);
}

export default Component;
