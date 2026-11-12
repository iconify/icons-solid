import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3h177btt.css';
import '../../css/f/f2-iyob1i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u3h177btt"/><path class="f2-iyob1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gopeed"} {...others} />);
}

export default Component;
