import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2u4dz6lg.css';
import '../../css/t/t6wjn2ega.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2u4dz6lg"/><path clip-rule="evenodd" class="t6wjn2ega"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:reddit-outline"} {...others} />);
}

export default Component;
