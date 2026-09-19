import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg3s3f--q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cg3s3f--q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:frozen-ring"} {...others} />);
}

export default Component;
