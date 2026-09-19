import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw_44nilr.css';
import '../../css/v/v9zanyf3o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uw_44nilr"/><path class="v9zanyf3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:new-tab"} {...others} />);
}

export default Component;
