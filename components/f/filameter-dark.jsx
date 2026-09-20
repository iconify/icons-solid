import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo3hfxvig.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uo3hfxvig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filameter-dark"} {...others} />);
}

export default Component;
