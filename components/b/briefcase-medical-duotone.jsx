import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2-9wig_g.css';
import '../../css/k/kow831b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2-9wig_g"/><path class="kow831b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:briefcase-medical-duotone"} {...others} />);
}

export default Component;
