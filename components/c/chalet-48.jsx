import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlo9kcbps.css';
import '../../css/w/w3uwt-m7u.css';
import '../../css/n/ncmae9omk.css';
import '../../css/n/n200guugx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hlo9kcbps"/><path class="w3uwt-m7u"/><path class="ncmae9omk"/><path class="n200guugx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chalet-48"} {...others} />);
}

export default Component;
