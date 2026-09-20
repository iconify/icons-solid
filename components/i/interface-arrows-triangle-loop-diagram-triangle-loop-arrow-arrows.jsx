import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0trzg1lf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u0trzg1lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-triangle-loop-diagram-triangle-loop-arrow-arrows"} {...others} />);
}

export default Component;
