import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/doi15pahr.css';
import '../../css/j/jn_t2lbtj.css';
import '../../css/i/i4f-v7blm.css';
import '../../css/n/n5t4oebmh.css';
import '../../css/n/nvyrptbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="doi15pahr"/><path class="jn_t2lbtj"/><path class="i4f-v7blm"/><path class="n5t4oebmh"/><path class="nvyrptbqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:temperature-thermometer-high"} {...others} />);
}

export default Component;
