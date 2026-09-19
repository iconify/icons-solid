import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp3l25kpe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zp3l25kpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:log-in-sharp"} {...others} />);
}

export default Component;
