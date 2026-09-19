import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hubdunbbu.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="hubdunbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:digg-alt"} {...others} />);
}

export default Component;
