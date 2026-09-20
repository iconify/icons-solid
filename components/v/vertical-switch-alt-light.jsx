import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as0b5j_bf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="as0b5j_bf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:vertical-switch-alt-light"} {...others} />);
}

export default Component;
