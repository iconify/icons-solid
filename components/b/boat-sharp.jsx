import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb3g90wjy.css';
import '../../css/s/snfmd8b9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb3g90wjy"/><path class="snfmd8b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:boat-sharp"} {...others} />);
}

export default Component;
