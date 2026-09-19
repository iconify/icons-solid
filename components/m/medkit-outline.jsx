import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrosq435m.css';
import '../../css/z/zu47cb4-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrosq435m"/><path clip-rule="evenodd" class="zu47cb4-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:medkit-outline"} {...others} />);
}

export default Component;
