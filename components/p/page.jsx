import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw-pbdcck.css';
import '../../css/u/ucdp9ybuj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pw-pbdcck"/><path class="ucdp9ybuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:page"} {...others} />);
}

export default Component;
