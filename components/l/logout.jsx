import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5fofrbqh.css';
import '../../css/v/vtw3o7h4f.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="h5fofrbqh"/><path class="vtw3o7h4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:logout"} {...others} />);
}

export default Component;
