import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcj_ausiv.css';
import '../../css/h/hmp_1pb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hcj_ausiv"/><path class="hmp_1pb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wink-tongue-filled"} {...others} />);
}

export default Component;
