import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf6dfce5y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kf6dfce5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bench-with-plaque-and-armrests"} {...others} />);
}

export default Component;
