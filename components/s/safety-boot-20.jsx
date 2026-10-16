import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3tl7xpsr.css';
import '../../css/t/t8tzpkb5n.css';
import '../../css/a/a196s7ber.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n3tl7xpsr"/><path class="t8tzpkb5n"/><path class="a196s7ber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safety-boot-20"} {...others} />);
}

export default Component;
