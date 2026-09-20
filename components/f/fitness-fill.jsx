import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_fblebdv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x_fblebdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fitness-fill"} {...others} />);
}

export default Component;
