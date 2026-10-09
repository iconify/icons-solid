import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w010_tghd.css';
import '../../css/j/jjy_43hmu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w010_tghd"/><path class="jjy_43hmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-hat-48-bold"} {...others} />);
}

export default Component;
