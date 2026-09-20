import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9ejojb1f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t9ejojb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:nine-point-star-outline"} {...others} />);
}

export default Component;
