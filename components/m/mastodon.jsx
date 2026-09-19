import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kns-59bpg.css';
import '../../css/s/sgs4ykqpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kns-59bpg"/><path class="sgs4ykqpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mastodon"} {...others} />);
}

export default Component;
