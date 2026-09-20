import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2y77bcrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m2y77bcrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dutch-windmill-fill"} {...others} />);
}

export default Component;
