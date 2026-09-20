import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk7aafmee.css';
import '../../css/x/xtb6wpbmv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sk7aafmee"/><path class="xtb6wpbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:american-airlines-light"} {...others} />);
}

export default Component;
