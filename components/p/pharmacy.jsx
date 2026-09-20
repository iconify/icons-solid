import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0g4jgwls.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="r0g4jgwls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:pharmacy"} {...others} />);
}

export default Component;
