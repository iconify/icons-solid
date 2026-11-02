import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuw4hdc2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuw4hdc2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wechat-line"} {...others} />);
}

export default Component;
