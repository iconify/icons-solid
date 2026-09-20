import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqn65lb2g.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="xqn65lb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:bitcoin"} {...others} />);
}

export default Component;
