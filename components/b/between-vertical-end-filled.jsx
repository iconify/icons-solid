import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykz2nk03s.css';
import '../../css/w/w4_yefglu.css';
import '../../css/a/ag06jb7os.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykz2nk03s"/><rect class="w4_yefglu"/><rect class="ag06jb7os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:between-vertical-end-filled"} {...others} />);
}

export default Component;
