import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz2anaczn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sz2anaczn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:watering-can-line"} {...others} />);
}

export default Component;
