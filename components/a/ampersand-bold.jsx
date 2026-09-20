import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edj3zob3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="edj3zob3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ampersand-bold"} {...others} />);
}

export default Component;
