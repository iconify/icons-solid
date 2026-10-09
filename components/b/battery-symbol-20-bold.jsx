import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui968qbnt.css';
import '../../css/u/u-wijubjh.css';
import '../../css/b/bf8rmdbee.css';
import '../../css/k/kaxml2b1n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ui968qbnt"/><path class="u-wijubjh"/><path class="bf8rmdbee"/><path class="kaxml2b1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-symbol-20-bold"} {...others} />);
}

export default Component;
