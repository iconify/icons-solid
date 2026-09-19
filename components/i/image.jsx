import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc75m8d8n.css';
import '../../css/r/rkf9r95ba.css';
import '../../css/g/gc3ocublh.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="mc75m8d8n"/><path class="rkf9r95ba"/><path class="gc3ocublh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:image"} {...others} />);
}

export default Component;
