import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng5xczucu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ng5xczucu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-underline"} {...others} />);
}

export default Component;
