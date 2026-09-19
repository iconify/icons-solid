import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy6apqb-v.css';
import '../../css/r/ryas737co.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xy6apqb-v"/><path class="ryas737co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:couchdb-wordmark"} {...others} />);
}

export default Component;
