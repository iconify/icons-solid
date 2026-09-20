import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9q8d4e-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9q8d4e-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:look-up-fill"} {...others} />);
}

export default Component;
