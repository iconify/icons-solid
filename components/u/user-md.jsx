import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4j3tp8lk.css';
import '../../css/d/dx--x-tgw.css';
import '../../css/u/uz0w99dfp.css';
import '../../css/j/jxxmdd81o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4j3tp8lk"/><path class="dx--x-tgw"/><path class="uz0w99dfp"/><path class="jxxmdd81o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:user-md"} {...others} />);
}

export default Component;
