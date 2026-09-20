import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0u2dqbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0u2dqbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:equal-math-symbol-circle"} {...others} />);
}

export default Component;
