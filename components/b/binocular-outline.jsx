import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogql77bjb.css';
import '../../css/g/gypepac7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ogql77bjb"/><path class="gypepac7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:binocular-outline"} {...others} />);
}

export default Component;
