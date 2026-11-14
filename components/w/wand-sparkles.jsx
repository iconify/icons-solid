import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng2jmjb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ng2jmjb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wand-sparkles"} {...others} />);
}

export default Component;
