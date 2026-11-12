import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr-iiqyqg.css';
import '../../css/f/f6p_znbqz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rr-iiqyqg"/><path class="f6p_znbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bracket-dark"} {...others} />);
}

export default Component;
