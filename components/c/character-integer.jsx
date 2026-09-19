import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaxt6_bwl.css';
import '../../css/x/x4jziszvm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jaxt6_bwl"/><path class="x4jziszvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:character-integer"} {...others} />);
}

export default Component;
