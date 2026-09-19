import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beuy52btz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="beuy52btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:google-scholar"} {...others} />);
}

export default Component;
