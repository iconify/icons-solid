import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t88j5zbtr.css';
import '../../css/l/ls3hpxbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t88j5zbtr"/><path class="ls3hpxbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-small-outline"} {...others} />);
}

export default Component;
