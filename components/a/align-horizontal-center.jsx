import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx8y2ds-k.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/j/jsmv-tewy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gx8y2ds-k"><path class="h2-2dgnfu"/><path class="jsmv-tewy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-horizontal-center"} {...others} />);
}

export default Component;
