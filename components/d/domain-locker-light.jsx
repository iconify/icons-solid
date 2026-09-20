import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxtptxsos.css';
import '../../css/m/m01ydll8v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxtptxsos"/><path class="m01ydll8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-locker-light"} {...others} />);
}

export default Component;
