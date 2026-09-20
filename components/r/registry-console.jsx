import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc17ftbpa.css';
import '../../css/c/c2ggwgpcw.css';
import '../../css/l/l6tftisdq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jc17ftbpa"/><path class="c2ggwgpcw"/><path class="l6tftisdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:registry-console"} {...others} />);
}

export default Component;
