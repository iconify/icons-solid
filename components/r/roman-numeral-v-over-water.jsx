import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur_1lrlwq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ur_1lrlwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:roman-numeral-v-over-water"} {...others} />);
}

export default Component;
