import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/h/hutuskbuc.css';
import '../../css/n/n9cednr3v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="hutuskbuc"/><path class="n9cednr3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:disappointed"} {...others} />);
}

export default Component;
