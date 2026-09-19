import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drp3_i9rj.css';

const viewBox = {"width":1152,"height":1632};
const content = `<path class="drp3_i9rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:child"} {...others} />);
}

export default Component;
