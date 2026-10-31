import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tav986bnk.css';
import '../../css/a/aih2n1bws.css';
import '../../css/f/fffug9o2n.css';
import '../../css/n/n0zn92bws.css';
import '../../css/l/l-ibb1blc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tav986bnk wm-shadow"/><path class="aih2n1bws wm-shadow"/><path class="fffug9o2n"/><path class="n0zn92bws"/><path class="l-ibb1blc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:unlink"} {...others} />);
}

export default Component;
