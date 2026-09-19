import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6hykly9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q6hykly9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:photo-filled"} {...others} />);
}

export default Component;
