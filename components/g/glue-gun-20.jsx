import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr0eqko7m.css';
import '../../css/q/q39gh2k1m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hr0eqko7m"/><path class="q39gh2k1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glue-gun-20"} {...others} />);
}

export default Component;
