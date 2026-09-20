import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi2j6qb-n.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="yi2j6qb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:bold"} {...others} />);
}

export default Component;
