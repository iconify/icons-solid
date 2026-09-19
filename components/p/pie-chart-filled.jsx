import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rasakkbar.css';
import '../../css/k/kthl54b0k.css';
import '../../css/r/r_bgghfih.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rasakkbar"/><path class="kthl54b0k"/><path class="r_bgghfih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pie-chart-filled"} {...others} />);
}

export default Component;
