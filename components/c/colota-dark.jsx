import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b103epbdu.css';
import '../../css/w/wre6mlbjq.css';
import '../../css/c/cz6z9n00t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b103epbdu"/><path class="wre6mlbjq"/><path class="cz6z9n00t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:colota-dark"} {...others} />);
}

export default Component;
