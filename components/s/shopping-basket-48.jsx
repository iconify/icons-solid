import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5vym_8fp.css';
import '../../css/z/z3ml8sb3q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k5vym_8fp"/><path class="z3ml8sb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shopping-basket-48"} {...others} />);
}

export default Component;
