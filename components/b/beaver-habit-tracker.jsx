import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwvjmvb6c.css';
import '../../css/o/ogd77sb1i.css';
import '../../css/g/g4-80-g_f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zwvjmvb6c"/><path class="ogd77sb1i"/><path class="g4-80-g_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beaver-habit-tracker"} {...others} />);
}

export default Component;
