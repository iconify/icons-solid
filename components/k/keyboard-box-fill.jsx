import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1i8s8bks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i1i8s8bks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:keyboard-box-fill"} {...others} />);
}

export default Component;
