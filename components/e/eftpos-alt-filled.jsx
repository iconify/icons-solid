import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in57ir3hv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="in57ir3hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:eftpos-alt-filled"} {...others} />);
}

export default Component;
