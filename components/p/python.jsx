import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/blnc77b6l.css';
import '../../css/d/d879a6bkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="blnc77b6l"/><path class="d879a6bkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:python"} {...others} />);
}

export default Component;
