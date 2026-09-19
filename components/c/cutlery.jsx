import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aitpvr66y.css';

const viewBox = {"width":328,"height":512};
const content = `<path class="aitpvr66y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:cutlery"} {...others} />);
}

export default Component;
