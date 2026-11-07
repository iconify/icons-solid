import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqha-5bom.css';
import '../../css/j/jsdqiibqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqha-5bom"/><path class="jsdqiibqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-from-line-bold-duotone"} {...others} />);
}

export default Component;
