import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gle8jacmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gle8jacmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wechat-miniprogram-fill"} {...others} />);
}

export default Component;
