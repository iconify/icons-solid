import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw-e0abnw.css';
import '../../css/a/a_9txtbjh.css';
import '../../css/l/l6z98fm3g.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="gw-e0abnw"/><path class="a_9txtbjh"/><path class="l6z98fm3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:xk-4x3"} {...others} />);
}

export default Component;
