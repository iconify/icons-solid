import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaqgtyjjh.css';
import '../../css/c/cr2fezr1m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kaqgtyjjh"/><path class="cr2fezr1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:autocaliweb"} {...others} />);
}

export default Component;
