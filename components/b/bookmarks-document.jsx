import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bpcgv21fa.css';
import '../../css/o/ox4faubrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bpcgv21fa"/><path class="ox4faubrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bookmarks-document"} {...others} />);
}

export default Component;
