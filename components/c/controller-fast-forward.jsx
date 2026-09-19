import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r86sqlbcq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r86sqlbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:controller-fast-forward"} {...others} />);
}

export default Component;
