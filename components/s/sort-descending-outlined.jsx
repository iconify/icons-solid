import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo1bv0flp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wo1bv0flp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:sort-descending-outlined"} {...others} />);
}

export default Component;
