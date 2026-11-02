import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg-n1kdas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fg-n1kdas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-minus-fill"} {...others} />);
}

export default Component;
