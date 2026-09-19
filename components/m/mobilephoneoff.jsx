import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa7jezu9i.css';
import '../../css/h/hn7rx0huz.css';
import '../../css/c/cej6nwvoo.css';
import '../../css/i/imwzp6bqv.css';
import '../../css/o/orn5ob8sm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sa7jezu9i"/><path class="hn7rx0huz"/><path class="cej6nwvoo"/><path class="imwzp6bqv"/><path class="orn5ob8sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mobilephoneoff"} {...others} />);
}

export default Component;
