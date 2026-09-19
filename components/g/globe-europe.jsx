import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amvdw8b4x.css';
import '../../css/o/om9xhncdy.css';
import '../../css/h/h-ythmv4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amvdw8b4x"/><path class="om9xhncdy"/><path class="h-ythmv4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-europe"} {...others} />);
}

export default Component;
