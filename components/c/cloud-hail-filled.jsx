import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_0y3m6li.css';
import '../../css/b/b6hy8accx.css';
import '../../css/i/igxotebur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_0y3m6li"/><path class="b6hy8accx"/><path class="igxotebur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-hail-filled"} {...others} />);
}

export default Component;
