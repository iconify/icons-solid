import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbf0-ebdh.css';
import '../../css/l/lxhtjibse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dbf0-ebdh"/><path class="lxhtjibse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-search"} {...others} />);
}

export default Component;
