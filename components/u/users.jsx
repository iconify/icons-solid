import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd1geldrz.css';
import '../../css/o/oerqs_b1q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jd1geldrz"/><path class="oerqs_b1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:users"} {...others} />);
}

export default Component;
