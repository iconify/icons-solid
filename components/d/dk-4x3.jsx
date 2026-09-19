import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb1o4ibht.css';
import '../../css/n/ngyu4emsk.css';
import '../../css/x/xin1hzb7w.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="pb1o4ibht"/><path class="ngyu4emsk"/><path class="xin1hzb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:dk-4x3"} {...others} />);
}

export default Component;
