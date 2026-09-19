import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s6061czwo.css';
import '../../css/u/uu1gnytcw.css';
import '../../css/g/g26oae4ld.css';
import '../../css/z/zgldf9_sj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="s6061czwo"/><path class="uu1gnytcw"/><path class="g26oae4ld"/><path class="zgldf9_sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-time-calendar-2"} {...others} />);
}

export default Component;
