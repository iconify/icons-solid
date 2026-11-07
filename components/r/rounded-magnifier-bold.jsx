import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3vimybge.css';
import '../../css/n/nhqseef_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j3vimybge"/><path class="nhqseef_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-bold"} {...others} />);
}

export default Component;
