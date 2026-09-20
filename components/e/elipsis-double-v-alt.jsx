import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8nu23brh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8nu23brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:elipsis-double-v-alt"} {...others} />);
}

export default Component;
