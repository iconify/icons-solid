import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cve7h0b7y.css';
import '../../css/r/rb36fjzyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cve7h0b7y"/><path class="rb36fjzyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:feather-filled"} {...others} />);
}

export default Component;
