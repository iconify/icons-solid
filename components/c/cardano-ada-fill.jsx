import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6h_-78-n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v6h_-78-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cardano-ada-fill"} {...others} />);
}

export default Component;
