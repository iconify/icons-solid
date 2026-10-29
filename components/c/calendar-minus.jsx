import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1cwg3bst.css';
import '../../css/p/pob67abxq.css';
import '../../css/c/c6wp6dbwc.css';
import '../../css/b/b7thxjbep.css';
import '../../css/r/r874cdbov.css';
import '../../css/h/hoz8f6bdb.css';
import '../../css/e/ehg3cwbmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t1cwg3bst wm-k"/><path class="pob67abxq wm-k"/><path class="c6wp6dbwc wm-k"/><path class="b7thxjbep wm-k"/><path class="r874cdbov wm-shine"/><path class="hoz8f6bdb wm-k"/><path class="ehg3cwbmj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:calendar-minus"} {...others} />);
}

export default Component;
