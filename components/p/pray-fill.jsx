import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glv3o6b_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="glv3o6b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pray-fill"} {...others} />);
}

export default Component;
