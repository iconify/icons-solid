import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxpwkkx4b.css';
import '../../css/c/cxrhsobiq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oxpwkkx4b"/><path clip-rule="evenodd" class="cxrhsobiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:whatsapp-solid"} {...others} />);
}

export default Component;
