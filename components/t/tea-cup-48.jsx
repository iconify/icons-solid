import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmsnddboj.css';
import '../../css/j/jc8vjxbbg.css';
import '../../css/g/g68oh1czg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bmsnddboj"/><path class="jc8vjxbbg"/><path class="g68oh1czg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tea-cup-48"} {...others} />);
}

export default Component;
