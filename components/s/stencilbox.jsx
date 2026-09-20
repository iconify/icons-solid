import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1hhj_bjg.css';
import '../../css/d/dqjf3aboz.css';
import '../../css/h/hwdtidf8z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h1hhj_bjg"/><path class="dqjf3aboz"/><path class="hwdtidf8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stencilbox"} {...others} />);
}

export default Component;
