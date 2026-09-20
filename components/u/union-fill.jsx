import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcp55eb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dcp55eb3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:union-fill"} {...others} />);
}

export default Component;
