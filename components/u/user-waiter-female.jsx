import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw2fmneoq.css';

const viewBox = {"width":1280,"height":1472};
const content = `<path class="pw2fmneoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:user-waiter-female"} {...others} />);
}

export default Component;
