import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o14l0bcfu.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="o14l0bcfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:shopping-bag"} {...others} />);
}

export default Component;
