import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1sgz3j6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y1sgz3j6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:eden"} {...others} />);
}

export default Component;
