import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yciimpb-x.css';
import '../../css/o/o0a-r_1pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yciimpb-x"/><path class="o0a-r_1pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-music-line"} {...others} />);
}

export default Component;
