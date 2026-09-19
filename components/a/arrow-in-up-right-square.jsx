import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8hod8bsp.css';
import '../../css/z/z9mo31emm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8hod8bsp"/><path class="z9mo31emm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-right-square"} {...others} />);
}

export default Component;
