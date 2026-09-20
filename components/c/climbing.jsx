import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy4y49t-u.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="uy4y49t-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:climbing"} {...others} />);
}

export default Component;
