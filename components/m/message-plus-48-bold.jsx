import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy-u42bhp.css';
import '../../css/j/jcjy32bzm.css';
import '../../css/a/al63s1bwo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zy-u42bhp"/><path class="jcjy32bzm"/><path class="al63s1bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-plus-48-bold"} {...others} />);
}

export default Component;
