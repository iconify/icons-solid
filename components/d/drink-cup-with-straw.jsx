import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl_9n0bxw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jl_9n0bxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:drink-cup-with-straw"} {...others} />);
}

export default Component;
