import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyp808bel.css';
import '../../css/g/gq1c8db9c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uyp808bel"/><path class="gq1c8db9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spooty-light"} {...others} />);
}

export default Component;
