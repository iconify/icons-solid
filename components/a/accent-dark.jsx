import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii_o2hbdo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ii_o2hbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:accent-dark"} {...others} />);
}

export default Component;
