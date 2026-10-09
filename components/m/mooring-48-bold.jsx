import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a42jbyb6c.css';
import '../../css/j/j68mnuhyh.css';
import '../../css/v/vyt0ikbhv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a42jbyb6c"/><path class="j68mnuhyh"/><path class="vyt0ikbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mooring-48-bold"} {...others} />);
}

export default Component;
