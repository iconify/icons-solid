import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu_afbskh.css';
import '../../css/e/eei-3cbtk.css';
import '../../css/g/gikolbcax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eu_afbskh"/><path class="eei-3cbtk"/><path class="gikolbcax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tk-1x1"} {...others} />);
}

export default Component;
