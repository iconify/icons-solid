import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht2v78f-m.css';
import '../../css/u/u431zobpm.css';
import '../../css/c/cbzm5ebwg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ht2v78f-m"/><path class="u431zobpm"/><path class="cbzm5ebwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:diode-48-bold"} {...others} />);
}

export default Component;
