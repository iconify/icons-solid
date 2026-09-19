import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si4d4hb_u.css';
import '../../css/y/yv_brepse.css';
import '../../css/f/f33c5bbfy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="si4d4hb_u"/><path class="yv_brepse"/><path class="f33c5bbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:down-circle-twotone"} {...others} />);
}

export default Component;
