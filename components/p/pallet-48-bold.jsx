import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be6_u9f6k.css';
import '../../css/b/b_4t_bc2a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="be6_u9f6k"/><path class="b_4t_bc2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pallet-48-bold"} {...others} />);
}

export default Component;
