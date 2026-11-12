import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3j8a4h1u.css';
import '../../css/r/r3b4dgb9r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l3j8a4h1u"/><path class="r3b4dgb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feedly"} {...others} />);
}

export default Component;
