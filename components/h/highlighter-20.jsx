import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmo5pdb9h.css';
import '../../css/p/p5fk5_2cq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kmo5pdb9h"/><path class="p5fk5_2cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:highlighter-20"} {...others} />);
}

export default Component;
