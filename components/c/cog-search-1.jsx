import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jou1-acod.css';
import '../../css/a/a2jebib3q.css';
import '../../css/a/aium6ybfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jou1-acod"/><path class="a2jebib3q"/><path class="aium6ybfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cog-search-1"} {...others} />);
}

export default Component;
