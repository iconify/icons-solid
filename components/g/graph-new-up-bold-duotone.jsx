import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/q/q-ty8vbuh.css';
import '../../css/y/yp5dl9p5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="q-ty8vbuh"/><path class="yp5dl9p5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-new-up-bold-duotone"} {...others} />);
}

export default Component;
