import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb1h9rbig.css';
import '../../css/d/dglb7bs3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zb1h9rbig"/><path class="dglb7bs3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:no-dollars-filled"} {...others} />);
}

export default Component;
