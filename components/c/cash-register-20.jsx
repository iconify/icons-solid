import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjmjq831a.css';
import '../../css/z/z1o2t68zu.css';
import '../../css/t/tok4elbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bjmjq831a"/><path class="z1o2t68zu"/><path class="tok4elbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cash-register-20"} {...others} />);
}

export default Component;
