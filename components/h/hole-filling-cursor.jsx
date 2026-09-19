import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx3q0nbmz.css';
import '../../css/e/e4e471wzp.css';
import '../../css/e/eziplt3ei.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="kx3q0nbmz"/><path class="e4e471wzp"/><path class="eziplt3ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hole-filling-cursor"} {...others} />);
}

export default Component;
