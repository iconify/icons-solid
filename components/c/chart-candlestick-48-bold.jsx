import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmultrkok.css';
import '../../css/r/rvr6ihv2q.css';
import '../../css/g/gu9qoyb5a.css';
import '../../css/z/z5qwait0j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mmultrkok"/><path class="rvr6ihv2q"/><path class="gu9qoyb5a"/><path class="z5qwait0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-candlestick-48-bold"} {...others} />);
}

export default Component;
