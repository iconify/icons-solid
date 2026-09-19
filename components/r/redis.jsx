import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__43in4h.css';
import '../../css/u/ub90ksf3r.css';
import '../../css/v/vi2s80h4t.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="a__43in4h"/><path class="ub90ksf3r"/><path class="vi2s80h4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:redis"} {...others} />);
}

export default Component;
