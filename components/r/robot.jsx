import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hftpl1bgl.css';
import '../../css/l/lq8j-ubmb.css';
import '../../css/a/ay3n_xfrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hftpl1bgl"/><path class="lq8j-ubmb"/><path class="ay3n_xfrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:robot"} {...others} />);
}

export default Component;
