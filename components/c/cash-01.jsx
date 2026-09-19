import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/at_f167ep.css';
import '../../css/v/v0iix4bqd.css';
import '../../css/i/iulpltu0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="at_f167ep"/><path class="v0iix4bqd"/><path class="iulpltu0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cash-01"} {...others} />);
}

export default Component;
