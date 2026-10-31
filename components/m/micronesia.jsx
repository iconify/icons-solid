import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpfjsd0jn.css';
import '../../css/i/iqumv76zj.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="rpfjsd0jn"/><path class="iqumv76zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:micronesia"} {...others} />);
}

export default Component;
