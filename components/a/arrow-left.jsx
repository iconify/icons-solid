import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/q/q_3cglb4g.css';
import '../../css/d/dxxog678i.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="q_3cglb4g"/><path class="dxxog678i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:arrow-left"} {...others} />);
}

export default Component;
