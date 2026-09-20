import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbirl8byl.css';
import '../../css/h/h546kdb4h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jbirl8byl"/><path class="h546kdb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rachio"} {...others} />);
}

export default Component;
