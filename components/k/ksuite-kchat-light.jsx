import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv_c0-59u.css';
import '../../css/w/whz7b1b5h.css';
import '../../css/m/m4ht6ksod.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wv_c0-59u"/><path class="whz7b1b5h"/><path class="m4ht6ksod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kchat-light"} {...others} />);
}

export default Component;
