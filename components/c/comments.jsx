import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg-5y4bmb.css';
import '../../css/p/pv1m9o-dj.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cg-5y4bmb"/><path class="pv1m9o-dj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:comments"} {...others} />);
}

export default Component;
