import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0bt8abzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r0bt8abzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-alt-arrow-left-outline"} {...others} />);
}

export default Component;
