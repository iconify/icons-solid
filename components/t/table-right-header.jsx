import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvs2q08pf.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lvs2q08pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:table-right-header"} {...others} />);
}

export default Component;
