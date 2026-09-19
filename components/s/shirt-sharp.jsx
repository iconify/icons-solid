import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6-v5-b8g.css';
import '../../css/s/spmrb2bwo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6-v5-b8g"/><path class="spmrb2bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shirt-sharp"} {...others} />);
}

export default Component;
