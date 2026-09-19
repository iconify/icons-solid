import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g712bfbaj.css';
import '../../css/h/hy4qzjznx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g712bfbaj"/><path class="hy4qzjznx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alarm-alt"} {...others} />);
}

export default Component;
