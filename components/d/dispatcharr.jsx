import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdaxkdb1q.css';
import '../../css/l/l-nhlab9d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rdaxkdb1q"/><path class="l-nhlab9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dispatcharr"} {...others} />);
}

export default Component;
