import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq5-hnk5f.css';
import '../../css/r/r4lbnxbqm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eq5-hnk5f"/><path class="r4lbnxbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-tennis-20-bold"} {...others} />);
}

export default Component;
