import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fren9q4hj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fren9q4hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:info-circle-filled"} {...others} />);
}

export default Component;
