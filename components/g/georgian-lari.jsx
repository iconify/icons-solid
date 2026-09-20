import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrqv0rx5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrqv0rx5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:georgian-lari"} {...others} />);
}

export default Component;
