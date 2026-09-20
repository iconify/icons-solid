import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8cz6n6-x.css';
import '../../css/r/r3b4dgb9r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q8cz6n6-x"/><path class="r3b4dgb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:feedly"} {...others} />);
}

export default Component;
