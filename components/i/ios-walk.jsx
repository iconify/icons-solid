import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-khpc3zq.css';
import '../../css/i/igluedbcz.css';
import '../../css/i/ij3sbybka.css';
import '../../css/d/df3x9fabe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-khpc3zq"/><circle transform="rotate(-80.781 274.673 69.329)" class="igluedbcz"/><path class="ij3sbybka"/><path class="df3x9fabe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-walk"} {...others} />);
}

export default Component;
