import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al8t810di.css';
import '../../css/x/xtbtl4t9z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="al8t810di"/><path class="xtbtl4t9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crimper-48-bold"} {...others} />);
}

export default Component;
