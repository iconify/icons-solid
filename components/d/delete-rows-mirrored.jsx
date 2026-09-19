import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl5m2ibfh.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="jl5m2ibfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:delete-rows-mirrored"} {...others} />);
}

export default Component;
