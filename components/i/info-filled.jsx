import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx7oyrbof.css';
import '../../css/m/mb0x8lb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="dx7oyrbof"/><path class="mb0x8lb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:info-filled"} {...others} />);
}

export default Component;
