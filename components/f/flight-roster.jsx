import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_nhushwe.css';
import '../../css/d/dvyctl1bu.css';
import '../../css/w/wvf8eitqm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="z_nhushwe"/><path class="dvyctl1bu"/><path class="wvf8eitqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flight-roster"} {...others} />);
}

export default Component;
