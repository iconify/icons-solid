import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwd_1frdz.css';
import '../../css/b/bcr3mblqh.css';
import '../../css/y/yekhwhkwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qwd_1frdz"/><path class="bcr3mblqh"/><path class="yekhwhkwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-times-light"} {...others} />);
}

export default Component;
