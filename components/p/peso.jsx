import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfzotcwxd.css';
import '../../css/e/eart31dpa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jfzotcwxd"/><path class="eart31dpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:peso"} {...others} />);
}

export default Component;
