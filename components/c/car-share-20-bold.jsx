import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2s83rbyk.css';
import '../../css/p/poctnlbvq.css';
import '../../css/g/gg86xpd5q.css';
import '../../css/s/swoyskbwx.css';
import '../../css/x/xbgpusb0f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r2s83rbyk"/><path class="poctnlbvq"/><path class="gg86xpd5q"/><path class="swoyskbwx"/><path class="xbgpusb0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-share-20-bold"} {...others} />);
}

export default Component;
