import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg_0y-dzp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yg_0y-dzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:feather"} {...others} />);
}

export default Component;
