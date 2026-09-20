import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8bo3ne0r.css';
import '../../css/a/a_gu8acsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8bo3ne0r"/><path class="a_gu8acsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:hd-filled"} {...others} />);
}

export default Component;
