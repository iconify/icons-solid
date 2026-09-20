import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz-9m7b0m.css';
import '../../css/o/oi5x-1v0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bz-9m7b0m"/><path class="oi5x-1v0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-checked-filled"} {...others} />);
}

export default Component;
