import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6na3qejl.css';
import '../../css/z/zneq0wbgm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q6na3qejl"/><path class="zneq0wbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:location-info-filled"} {...others} />);
}

export default Component;
