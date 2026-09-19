import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwimcqx0d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kwimcqx0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:trophy-filled"} {...others} />);
}

export default Component;
