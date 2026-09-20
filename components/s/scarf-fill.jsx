import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le_5x_bsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le_5x_bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:scarf-fill"} {...others} />);
}

export default Component;
