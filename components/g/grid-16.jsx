import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge94l3j4u.css';
import '../../css/p/p1-wg6b3c.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ge94l3j4u"/><path clip-rule="evenodd" class="p1-wg6b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:grid-16"} {...others} />);
}

export default Component;
