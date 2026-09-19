import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzy6kp86h.css';
import '../../css/k/k70t2o__t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzy6kp86h"/><path class="k70t2o__t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:fan"} {...others} />);
}

export default Component;
