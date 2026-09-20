import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hegsj5srz.css';
import '../../css/b/bmfu_2bku.css';
import '../../css/v/v547fi37q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hegsj5srz"/><path class="bmfu_2bku"/><path class="v547fi37q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:baiducloud"} {...others} />);
}

export default Component;
