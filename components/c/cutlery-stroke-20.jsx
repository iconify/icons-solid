import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0cnxybhb.css';
import '../../css/q/qeky-4bsk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k0cnxybhb"/><path class="qeky-4bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cutlery-stroke-20"} {...others} />);
}

export default Component;
