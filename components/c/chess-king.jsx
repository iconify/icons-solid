import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phkpb-2vq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="phkpb-2vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:chess-king"} {...others} />);
}

export default Component;
