import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cztp4ub5c.css';
import '../../css/x/xn7w50bnc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cztp4ub5c"/><path class="xn7w50bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:point-of-presence"} {...others} />);
}

export default Component;
