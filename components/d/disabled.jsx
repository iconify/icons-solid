import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciq8kjb7u.css';
import '../../css/o/ob9cd8xhy.css';
import '../../css/a/av0rcu6kc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ciq8kjb7u"/><path class="ob9cd8xhy"/><path class="av0rcu6kc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:disabled"} {...others} />);
}

export default Component;
