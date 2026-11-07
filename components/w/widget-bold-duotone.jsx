import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/yruzez1gq.css';
import '../../css/e/eog0g2beg.css';
import '../../css/y/yawhug1ht.css';
import '../../css/y/yi8dv1b1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="yruzez1gq"/><path class="eog0g2beg"/></g><path class="yawhug1ht"/><path class="yi8dv1b1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-bold-duotone"} {...others} />);
}

export default Component;
