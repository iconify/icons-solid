import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm86fbbey.css';
import '../../css/c/c6ug3vbfo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lm86fbbey"/><path class="c6ug3vbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notifuse"} {...others} />);
}

export default Component;
