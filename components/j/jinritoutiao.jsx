import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3sx0h80t.css';
import '../../css/j/jz3-sacqt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i3sx0h80t"/><path clip-rule="evenodd" class="jz3-sacqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:jinritoutiao"} {...others} />);
}

export default Component;
