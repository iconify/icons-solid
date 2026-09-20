import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx4o6tq-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx4o6tq-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:car-sharp"} {...others} />);
}

export default Component;
