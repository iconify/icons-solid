import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-yolg93x.css';
import '../../css/x/x_6no5bff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-yolg93x"/><path class="x_6no5bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:door-open"} {...others} />);
}

export default Component;
