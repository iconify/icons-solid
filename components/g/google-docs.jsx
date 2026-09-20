import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjcj41b6z.css';
import '../../css/l/l-n55zbgm.css';
import '../../css/a/a79pf1bey.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pjcj41b6z"/><path class="l-n55zbgm"/><path class="a79pf1bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-docs"} {...others} />);
}

export default Component;
