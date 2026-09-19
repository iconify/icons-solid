import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6_s7g3ed.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q6_s7g3ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:align-full-width"} {...others} />);
}

export default Component;
