import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/heqtmdb8h.css';
import '../../css/p/pm27xrbad.css';
import '../../css/r/r0cxtj73q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="heqtmdb8h"/><circle class="pm27xrbad"/><path class="r0cxtj73q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-search-light"} {...others} />);
}

export default Component;
