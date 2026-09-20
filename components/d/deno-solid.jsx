import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao7jv8aag.css';
import '../../css/o/ouxiombbt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ao7jv8aag"/><path clip-rule="evenodd" class="ouxiombbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:deno-solid"} {...others} />);
}

export default Component;
