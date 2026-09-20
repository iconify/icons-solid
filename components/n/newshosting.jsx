import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijb908brc.css';
import '../../css/t/tucrirb7e.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ijb908brc"/><path class="tucrirb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:newshosting"} {...others} />);
}

export default Component;
