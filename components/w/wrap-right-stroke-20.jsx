import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp0wk9a3w.css';
import '../../css/k/kmdu8odkd.css';
import '../../css/q/qm438lbpz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rp0wk9a3w"/><path class="kmdu8odkd"/><path class="qm438lbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wrap-right-stroke-20"} {...others} />);
}

export default Component;
