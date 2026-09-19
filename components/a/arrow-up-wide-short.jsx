import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7sy1g2se.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="o7sy1g2se"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:arrow-up-wide-short"} {...others} />);
}

export default Component;
