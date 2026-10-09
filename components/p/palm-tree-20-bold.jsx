import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqbdr3bwf.css';
import '../../css/l/lq302uv1z.css';
import '../../css/g/gsxsmjbdv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dqbdr3bwf"/><path class="lq302uv1z"/><path class="gsxsmjbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:palm-tree-20-bold"} {...others} />);
}

export default Component;
