import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxiruyb8b.css';
import '../../css/j/juj6h7bxp.css';
import '../../css/n/n9kk-kgek.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rxiruyb8b"/><path class="juj6h7bxp"/><path class="n9kk-kgek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:box"} {...others} />);
}

export default Component;
