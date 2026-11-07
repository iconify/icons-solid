import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdzkjibvl.css';
import '../../css/e/e4qlnbc0x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdzkjibvl"/><path clip-rule="evenodd" class="e4qlnbc0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-square-bold"} {...others} />);
}

export default Component;
