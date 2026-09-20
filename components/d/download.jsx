import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwzxh9b8m.css';
import '../../css/w/wfizkjosn.css';
import '../../css/p/pz2e0kkio.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwzxh9b8m"/><path class="wfizkjosn"/><path class="pz2e0kkio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:download"} {...others} />);
}

export default Component;
