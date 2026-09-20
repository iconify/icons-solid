import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxb7bva-l.css';
import '../../css/m/m6c-bbbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxb7bva-l"/><path class="m6c-bbbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bolt"} {...others} />);
}

export default Component;
