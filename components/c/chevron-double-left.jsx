import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c55g4gb7e.css';
import '../../css/j/jkx5qo6th.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c55g4gb7e"/><path class="jkx5qo6th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chevron-double-left"} {...others} />);
}

export default Component;
