import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf9l8pb0q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kf9l8pb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:question-small-outline"} {...others} />);
}

export default Component;
