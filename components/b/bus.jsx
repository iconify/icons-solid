import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf7w_yagv.css';
import '../../css/c/c834y5bay.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lf7w_yagv"/><path class="c834y5bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bus"} {...others} />);
}

export default Component;
