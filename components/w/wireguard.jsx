import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5htat2ww.css';
import '../../css/t/tiikn06-w.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="d5htat2ww"/><path class="tiikn06-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wireguard"} {...others} />);
}

export default Component;
