import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clpb2bbyt.css';
import '../../css/t/t5bungbfg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="clpb2bbyt"/><path class="t5bungbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-ladder-48"} {...others} />);
}

export default Component;
