import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b10s5pbto.css';
import '../../css/h/hymlskbhi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b10s5pbto"/><path class="hymlskbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fridge-48-bold"} {...others} />);
}

export default Component;
