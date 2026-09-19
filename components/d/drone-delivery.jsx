import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3yeq3__n.css';
import '../../css/q/qbtyf7buh.css';
import '../../css/j/j7hpihb9i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y3yeq3__n"/><path class="qbtyf7buh"/><path class="j7hpihb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:drone-delivery"} {...others} />);
}

export default Component;
