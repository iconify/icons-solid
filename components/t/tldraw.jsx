import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3o88hbsh.css';
import '../../css/q/q5chu0b0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v3o88hbsh"/><path class="q5chu0b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tldraw"} {...others} />);
}

export default Component;
