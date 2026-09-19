import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/io1nfda-a.css';
import '../../css/i/ixwm5pqlj.css';
import '../../css/g/glrkmsbvq.css';
import '../../css/v/vtuln3fnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="io1nfda-a"/><path class="ixwm5pqlj"/><path class="glrkmsbvq"/><path class="vtuln3fnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-21"} {...others} />);
}

export default Component;
