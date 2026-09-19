import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c13bt8b3z.css';
import '../../css/l/lgvvujlva.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c13bt8b3z"/><path class="lgvvujlva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:hand-left-outline"} {...others} />);
}

export default Component;
