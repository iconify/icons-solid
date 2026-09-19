import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj9rupc6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oj9rupc6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shopping-bag-alt"} {...others} />);
}

export default Component;
