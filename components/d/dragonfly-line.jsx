import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m01hnh5mm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m01hnh5mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dragonfly-line"} {...others} />);
}

export default Component;
