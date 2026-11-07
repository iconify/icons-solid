import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c08ckl39y.css';
import '../../css/f/fdtedkyxq.css';
import '../../css/r/re8-x0t_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c08ckl39y"/><path class="fdtedkyxq"/><path class="re8-x0t_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:filters-bold"} {...others} />);
}

export default Component;
