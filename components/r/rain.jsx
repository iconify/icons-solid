import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os67eymuh.css';
import '../../css/s/sg7qdup6z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="os67eymuh"/><path class="sg7qdup6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:rain"} {...others} />);
}

export default Component;
