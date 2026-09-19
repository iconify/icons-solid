import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ropm3r5qo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ropm3r5qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:birthday-cake-filled"} {...others} />);
}

export default Component;
