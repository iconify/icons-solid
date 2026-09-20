import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0ts1q8ff.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="v0ts1q8ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:kitten"} {...others} />);
}

export default Component;
