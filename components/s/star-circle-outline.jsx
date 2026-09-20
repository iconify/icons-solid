import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0bta1xpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t0bta1xpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-circle-outline"} {...others} />);
}

export default Component;
