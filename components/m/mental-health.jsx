import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noegfwg_l.css';
import '../../css/r/r-a7fhb8w.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="noegfwg_l"/><path class="r-a7fhb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:mental-health"} {...others} />);
}

export default Component;
