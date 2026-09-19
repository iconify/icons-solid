import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l99px9b1j.css';
import '../../css/z/zhugi-b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l99px9b1j"/><path class="zhugi-b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:ip"} {...others} />);
}

export default Component;
