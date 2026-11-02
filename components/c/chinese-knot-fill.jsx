import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvmku2bra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvmku2bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chinese-knot-fill"} {...others} />);
}

export default Component;
