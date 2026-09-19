import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-px0kjof.css';
import '../../css/p/p0hdxnbox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-px0kjof"/><path class="p0hdxnbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:power-filled"} {...others} />);
}

export default Component;
