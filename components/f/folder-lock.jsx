import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spkac_bdx.css';
import '../../css/b/bj5taw8na.css';
import '../../css/o/o96z46bqq.css';
import '../../css/o/oj4c755zs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="spkac_bdx"/><path class="bj5taw8na"/><path class="o96z46bqq"/><path class="oj4c755zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-lock"} {...others} />);
}

export default Component;
