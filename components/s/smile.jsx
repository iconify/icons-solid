import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/a3foef0gz.css';
import '../../css/t/tfdscjqrz.css';
import '../../css/z/z7u64yc6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="a3foef0gz"/><path class="tfdscjqrz"/><path class="z7u64yc6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:smile"} {...others} />);
}

export default Component;
