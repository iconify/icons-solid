import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk6o28bka.css';
import '../../css/c/c991nybxb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qk6o28bka"/><path class="c991nybxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:android-auto-light"} {...others} />);
}

export default Component;
