import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/srev3-blk.css';
import '../../css/o/ob4hknlne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="srev3-blk"/><path class="ob4hknlne wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-list-solid"} {...others} />);
}

export default Component;
