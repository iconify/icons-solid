import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxtrb1b8k.css';
import '../../css/h/ho146fqck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxtrb1b8k"/><path class="ho146fqck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:window-minimize"} {...others} />);
}

export default Component;
