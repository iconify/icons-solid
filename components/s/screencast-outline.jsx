import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by49boidr.css';
import '../../css/n/n96kk3b4d.css';
import '../../css/c/cxn0apbqq.css';
import '../../css/v/v3s8c5bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="by49boidr"/><path class="n96kk3b4d"/><path class="cxn0apbqq"/><path class="v3s8c5bgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:screencast-outline"} {...others} />);
}

export default Component;
