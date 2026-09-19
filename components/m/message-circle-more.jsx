import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mygbtuldy.css';
import '../../css/m/ms95v64br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mygbtuldy"/><path class="ms95v64br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-circle-more"} {...others} />);
}

export default Component;
