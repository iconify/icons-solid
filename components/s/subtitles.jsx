import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxtsi0lcq.css';
import '../../css/f/fbuuzob6v.css';
import '../../css/n/nvelfbb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="yxtsi0lcq"/><path class="fbuuzob6v"/><rect class="nvelfbb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:subtitles"} {...others} />);
}

export default Component;
