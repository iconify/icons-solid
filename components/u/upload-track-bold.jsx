import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z09gg-b_z.css';
import '../../css/a/absjoyb4u.css';
import '../../css/y/y1zrpxbtp.css';
import '../../css/w/wocmnefrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z09gg-b_z"/><path class="absjoyb4u"/><path class="y1zrpxbtp"/><path clip-rule="evenodd" class="wocmnefrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-bold"} {...others} />);
}

export default Component;
