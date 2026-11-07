import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/j/j60t8hb-x.css';
import '../../css/d/d0gfj5yqu.css';
import '../../css/s/sl1flzbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="j60t8hb-x"/><path class="d0gfj5yqu"/><path class="sl1flzbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-square-bold-duotone"} {...others} />);
}

export default Component;
