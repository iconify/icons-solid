import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7hozdbfo.css';
import '../../css/w/wsf1vzb3i.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/x/xxjjkdbfs.css';
import '../../css/j/jd1jh3bez.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="r7hozdbfo"/><path class="wsf1vzb3i"/><g class="rpvb-o6bq"><path class="xxjjkdbfs"/><path class="jd1jh3bez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bell"} {...others} />);
}

export default Component;
