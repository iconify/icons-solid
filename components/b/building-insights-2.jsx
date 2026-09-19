import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_n2pacdg.css';
import '../../css/s/s_5pz2bdm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l_n2pacdg"/><path class="s_5pz2bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:building-insights-2"} {...others} />);
}

export default Component;
