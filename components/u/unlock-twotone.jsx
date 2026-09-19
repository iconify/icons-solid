import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwbmeku4p.css';
import '../../css/y/yp5ecdcuz.css';
import '../../css/k/ko513mbji.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bwbmeku4p"/><path class="yp5ecdcuz"/><path class="ko513mbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:unlock-twotone"} {...others} />);
}

export default Component;
