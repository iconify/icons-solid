import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4mqbubyx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h4mqbubyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:ellipsis-vertical"} {...others} />);
}

export default Component;
