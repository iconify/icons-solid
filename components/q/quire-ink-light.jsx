import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms0ln98en.css';
import '../../css/i/i3opoge7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ms0ln98en"/><path class="i3opoge7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quire-ink-light"} {...others} />);
}

export default Component;
