import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7c6_u3ej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7c6_u3ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:caret-down-filled"} {...others} />);
}

export default Component;
