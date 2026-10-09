import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqqn4975g.css';
import '../../css/h/hgn5lvw7l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sqqn4975g"/><path class="hgn5lvw7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:piggy-bank-20"} {...others} />);
}

export default Component;
