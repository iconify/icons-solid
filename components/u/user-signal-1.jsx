import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/df4ev_7nm.css';
import '../../css/h/h39uz7b6t.css';
import '../../css/l/laoxocbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="df4ev_7nm"/><path class="h39uz7b6t"/><path class="laoxocbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:user-signal-1"} {...others} />);
}

export default Component;
