import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylh2tps0c.css';
import '../../css/a/a-5p04cix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ylh2tps0c"/><path class="a-5p04cix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:mic-sharp"} {...others} />);
}

export default Component;
