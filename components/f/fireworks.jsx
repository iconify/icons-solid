import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmwx09b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tmwx09b0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fireworks"} {...others} />);
}

export default Component;
