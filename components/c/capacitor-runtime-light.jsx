import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwuw72bhz.css';
import '../../css/g/gs0icwbbh.css';
import '../../css/e/ebf9xob5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gwuw72bhz"/><path class="gs0icwbbh"/><path class="ebf9xob5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitor-runtime-light"} {...others} />);
}

export default Component;
