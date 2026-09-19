import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8__0mb4m.css';
import '../../css/b/bb_scruft.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m8__0mb4m"/><path class="bb_scruft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:alarm"} {...others} />);
}

export default Component;
