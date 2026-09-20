import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti42iobpp.css';
import '../../css/w/w3z640blx.css';
import '../../css/b/b_fzd2v5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti42iobpp"/><path class="w3z640blx"/><path class="b_fzd2v5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flash-circle-line"} {...others} />);
}

export default Component;
