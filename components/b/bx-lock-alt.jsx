import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t33jnj4eq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t33jnj4eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-lock-alt"} {...others} />);
}

export default Component;
