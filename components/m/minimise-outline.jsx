import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohi4kqh9v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ohi4kqh9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:minimise-outline"} {...others} />);
}

export default Component;
