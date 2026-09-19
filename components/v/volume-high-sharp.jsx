import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-xue7lql.css';
import '../../css/r/rh9letwnk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f-xue7lql"/><path class="rh9letwnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:volume-high-sharp"} {...others} />);
}

export default Component;
