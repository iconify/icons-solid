import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw-3vdb_m.css';
import '../../css/h/hwffqcn9l.css';
import '../../css/q/q4zcn6s8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yw-3vdb_m"/><path class="hwffqcn9l"/><path clip-rule="evenodd" class="q4zcn6s8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:behance-solid"} {...others} />);
}

export default Component;
