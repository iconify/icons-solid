import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-kbjab1h.css';
import '../../css/a/ao1_d-37i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-kbjab1h"/><path class="ao1_d-37i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:face-alt-3-filled"} {...others} />);
}

export default Component;
