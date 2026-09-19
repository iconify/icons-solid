import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1nlpp2od.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="o1nlpp2od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:bullhorn"} {...others} />);
}

export default Component;
