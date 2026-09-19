import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxyrztbdj.css';
import '../../css/h/h2egwczhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxyrztbdj"/><path class="h2egwczhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-right-circle"} {...others} />);
}

export default Component;
