import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl3lnyh2h.css';
import '../../css/q/q3rs99g9y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jl3lnyh2h"/><path class="q3rs99g9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-diamond"} {...others} />);
}

export default Component;
