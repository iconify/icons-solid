import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqf2av3eh.css';
import '../../css/f/fs-22ozdv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kqf2av3eh"/><path class="fs-22ozdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:drink-01"} {...others} />);
}

export default Component;
