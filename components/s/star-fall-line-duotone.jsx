import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p-w3owbpc.css';
import '../../css/t/t2_4h2b9i.css';
import '../../css/l/lmlf25b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="p-w3owbpc"/><path class="t2_4h2b9i"/><path class="lmlf25b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-line-duotone"} {...others} />);
}

export default Component;
