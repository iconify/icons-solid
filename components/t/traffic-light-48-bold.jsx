import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iekkhobgo.css';
import '../../css/a/ahhgx2b3h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iekkhobgo"/><path class="ahhgx2b3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-light-48-bold"} {...others} />);
}

export default Component;
