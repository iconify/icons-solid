import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl6xnzcek.css';
import '../../css/u/u4btp48pk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jl6xnzcek"/><path class="u4btp48pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refinery-20"} {...others} />);
}

export default Component;
