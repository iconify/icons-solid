import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttg6ivr-q.css';
import '../../css/k/k0g8rv05t.css';
import '../../css/a/ahhagtoge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttg6ivr-q"/><path class="k0g8rv05t"/><path class="ahhagtoge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rolling-pin-bold"} {...others} />);
}

export default Component;
