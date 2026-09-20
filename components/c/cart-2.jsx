import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4cc3ab5d.css';
import '../../css/y/ysifiqi0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t4cc3ab5d"/><path class="ysifiqi0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cart-2"} {...others} />);
}

export default Component;
