import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz5nuxbgv.css';
import '../../css/s/szs1rbc2k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nz5nuxbgv"/><path class="szs1rbc2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lemmy"} {...others} />);
}

export default Component;
