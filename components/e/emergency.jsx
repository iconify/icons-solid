import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huotcacxk.css';
import '../../css/j/jixvyn1ey.css';
import '../../css/b/bs4b88r6x.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="huotcacxk"/><path class="jixvyn1ey"/><path class="bs4b88r6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:emergency"} {...others} />);
}

export default Component;
