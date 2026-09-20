import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvpihrqbl.css';
import '../../css/b/bocz3tbbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pvpihrqbl"/><path class="bocz3tbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fhem-light"} {...others} />);
}

export default Component;
