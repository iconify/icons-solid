import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc8-4tb2b.css';
import '../../css/n/nw-f-lb0x.css';
import '../../css/t/t_p41ydtf.css';
import '../../css/a/advo7kb4g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gc8-4tb2b"/><path class="nw-f-lb0x"/><path class="t_p41ydtf"/><path class="advo7kb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:control-twotone"} {...others} />);
}

export default Component;
