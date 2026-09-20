import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wylbpob6x.css';
import '../../css/m/mfmk55b6h.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/x/xzsdyccou.css';
import '../../css/i/icawvsbki.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/aa69xwzep.css';
import '../../css/q/qwuhqkb9a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wylbpob6x"/><path class="mfmk55b6h"/><g class="hq1bfqbrr"><circle class="xzsdyccou"/><path class="icawvsbki"/></g><g class="x8poo_bjf"><circle class="xzsdyccou"/><path class="aa69xwzep"/><path class="qwuhqkb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-climbing-light-skin-tone"} {...others} />);
}

export default Component;
