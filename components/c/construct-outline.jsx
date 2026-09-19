import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7kg3hbvs.css';
import '../../css/i/irdc55aqf.css';
import '../../css/d/di4jzbbfu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o7kg3hbvs"/><path class="irdc55aqf"/><path class="di4jzbbfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:construct-outline"} {...others} />);
}

export default Component;
