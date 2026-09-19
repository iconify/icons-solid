import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv0mj9bsl.css';
import '../../css/h/hmo75wbbp.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="cv0mj9bsl"/><path class="hmo75wbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:camera-sharp"} {...others} />);
}

export default Component;
