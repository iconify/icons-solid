import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inel58btr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="inel58btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:diamonds-2"} {...others} />);
}

export default Component;
