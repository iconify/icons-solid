import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycu86rb2t.css';
import '../../css/m/my-nawb0y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ycu86rb2t"/><path class="my-nawb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heading-48-bold"} {...others} />);
}

export default Component;
