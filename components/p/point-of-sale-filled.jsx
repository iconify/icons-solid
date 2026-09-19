import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi-9byb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bi-9byb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:point-of-sale-filled"} {...others} />);
}

export default Component;
