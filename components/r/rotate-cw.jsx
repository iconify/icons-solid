import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/ckkkwfqzb.css';
import '../../css/s/sz5sjcpfx.css';
import '../../css/w/ww9wr961u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ckkkwfqzb"/><path class="sz5sjcpfx"/><path class="ww9wr961u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:rotate-cw"} {...others} />);
}

export default Component;
