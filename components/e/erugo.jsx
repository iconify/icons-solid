import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmjlz_b5w.css';
import '../../css/f/f-tq-dhdc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jmjlz_b5w"/><path class="f-tq-dhdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:erugo"} {...others} />);
}

export default Component;
