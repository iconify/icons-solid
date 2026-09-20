import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua_-x4bud.css';
import '../../css/f/f2r653n8a.css';
import '../../css/q/qpob8mzln.css';
import '../../css/m/msjcjgj5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ua_-x4bud"/><path class="f2r653n8a"/><path class="qpob8mzln"/><path class="msjcjgj5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bxx"} {...others} />);
}

export default Component;
