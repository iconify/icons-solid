import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv7o-5b3h.css';
import '../../css/d/d_h7705bc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pv7o-5b3h"/><path class="d_h7705bc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:snow-blizzard"} {...others} />);
}

export default Component;
