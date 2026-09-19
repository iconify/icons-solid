import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf677ub6l.css';
import '../../css/n/nvm48juhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yf677ub6l"/><path class="nvm48juhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-export"} {...others} />);
}

export default Component;
