import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/h/huzs6bryl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="huzs6bryl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevron-left-circle-48"} {...others} />);
}

export default Component;
