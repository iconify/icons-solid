import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjo077brx.css';
import '../../css/x/x4_qz_bvx.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="qjo077brx"/><path class="x4_qz_bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:watch-11"} {...others} />);
}

export default Component;
