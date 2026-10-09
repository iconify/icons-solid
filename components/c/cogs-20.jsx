import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc234ccnu.css';
import '../../css/v/v0_7k5btb.css';
import '../../css/r/rbyjwpwup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kc234ccnu"/><path class="v0_7k5btb"/><path class="rbyjwpwup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cogs-20"} {...others} />);
}

export default Component;
