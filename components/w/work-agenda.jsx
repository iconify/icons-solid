import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x-ve4pbcd.css';
import '../../css/r/rw-8t_d6o.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="x-ve4pbcd"/><path class="rw-8t_d6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:work-agenda"} {...others} />);
}

export default Component;
