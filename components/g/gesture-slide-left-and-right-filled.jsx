import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx5km29gc.css';
import '../../css/u/ua3nsqb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rx5km29gc"/><path class="ua3nsqb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-slide-left-and-right-filled"} {...others} />);
}

export default Component;
