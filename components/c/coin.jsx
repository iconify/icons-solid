import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vohyy3tlk.css';
import '../../css/m/mj4w1gb3h.css';
import '../../css/a/adgxpsk5m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vohyy3tlk"/><path class="mj4w1gb3h"/><path class="adgxpsk5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:coin"} {...others} />);
}

export default Component;
