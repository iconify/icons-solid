import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whl2ggbnv.css';
import '../../css/z/zxqlfdc4u.css';
import '../../css/d/dw105c7vv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whl2ggbnv"/><path clip-rule="evenodd" class="zxqlfdc4u"/><path class="dw105c7vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-move-solid"} {...others} />);
}

export default Component;
