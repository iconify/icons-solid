import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef455w1yk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ef455w1yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:navigation-off-48-bold"} {...others} />);
}

export default Component;
