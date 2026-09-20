import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4yvbibxr.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="q4yvbibxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:rain-wind"} {...others} />);
}

export default Component;
