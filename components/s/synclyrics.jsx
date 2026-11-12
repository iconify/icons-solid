import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtupm4bil.css';
import '../../css/e/eionscb5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xtupm4bil"/><path class="eionscb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synclyrics"} {...others} />);
}

export default Component;
