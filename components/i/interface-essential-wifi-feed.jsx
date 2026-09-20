import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnsha0bgv.css';
import '../../css/g/gol1xybds.css';
import '../../css/c/czudsiv_x.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lnsha0bgv"/><path class="gol1xybds"/><path class="czudsiv_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-wifi-feed"} {...others} />);
}

export default Component;
