import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6vz2xq0h.css';
import '../../css/i/ii-9vg1fj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6vz2xq0h"/><path class="ii-9vg1fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lock-checked-filled"} {...others} />);
}

export default Component;
