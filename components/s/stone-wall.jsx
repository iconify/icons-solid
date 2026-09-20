import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4ekc_jgn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d4ekc_jgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:stone-wall"} {...others} />);
}

export default Component;
