import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_02szb5c.css';
import '../../css/t/tw_m98bcm.css';
import '../../css/f/fgnd1rb_j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q_02szb5c"/><path class="tw_m98bcm"/><path class="fgnd1rb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-apollo-open"} {...others} />);
}

export default Component;
