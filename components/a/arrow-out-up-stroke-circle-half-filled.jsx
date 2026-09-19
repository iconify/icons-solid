import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq32xccdr.css';
import '../../css/l/lm5rabblj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq32xccdr"/><path class="lm5rabblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-stroke-circle-half-filled"} {...others} />);
}

export default Component;
