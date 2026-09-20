import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0p-n6nhc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0p-n6nhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dolibarr-light"} {...others} />);
}

export default Component;
