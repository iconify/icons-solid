import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6xt5c87v.css';
import '../../css/a/a-9mugb1d.css';
import '../../css/u/up6r22q7v.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="j6xt5c87v"/><circle class="a-9mugb1d"/><path class="up6r22q7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:nuclear-outline"} {...others} />);
}

export default Component;
