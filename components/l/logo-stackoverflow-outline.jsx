import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpbhyqbff.css';
import '../../css/j/jl37fgbdb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cpbhyqbff"/><path class="jl37fgbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-stackoverflow-outline"} {...others} />);
}

export default Component;
