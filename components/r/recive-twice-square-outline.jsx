import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4o-mf99w.css';
import '../../css/c/cnzpvyp0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4o-mf99w"/><path clip-rule="evenodd" class="cnzpvyp0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:recive-twice-square-outline"} {...others} />);
}

export default Component;
