import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2we-hbpo.css';
import '../../css/b/bd2w689nn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z2we-hbpo"/><path class="bd2w689nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bell-strike-fill-20"} {...others} />);
}

export default Component;
