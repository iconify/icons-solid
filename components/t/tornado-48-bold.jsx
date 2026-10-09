import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn9n7-baz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fn9n7-baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tornado-48-bold"} {...others} />);
}

export default Component;
