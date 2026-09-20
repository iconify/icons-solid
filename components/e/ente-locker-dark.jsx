import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phg1s7mys.css';
import '../../css/a/a35dc2b9v.css';
import '../../css/b/b681yhxlk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="phg1s7mys"/><path class="a35dc2b9v"/><path class="b681yhxlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-locker-dark"} {...others} />);
}

export default Component;
