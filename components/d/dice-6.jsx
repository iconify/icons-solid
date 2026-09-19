import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpoubbo_e.css';
import '../../css/m/mhmgmlajz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpoubbo_e"/><path class="mhmgmlajz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dice-6"} {...others} />);
}

export default Component;
