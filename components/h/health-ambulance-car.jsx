import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbva30-wv.css';
import '../../css/h/hs2nkdwup.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xbva30-wv"/><path class="hs2nkdwup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-ambulance-car"} {...others} />);
}

export default Component;
