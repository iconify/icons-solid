import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq5v0fbso.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gq5v0fbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pgsty-silo-light"} {...others} />);
}

export default Component;
