import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yawhug1ht.css';
import '../../css/i/ikdqng8fd.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/czjpdqrfy.css';
import '../../css/m/mz-sgwb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yawhug1ht"/><path class="ikdqng8fd"/><g class="xtpeb-edw"><path class="czjpdqrfy"/><path class="mz-sgwb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-2-bold-duotone"} {...others} />);
}

export default Component;
