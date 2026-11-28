import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqzfwhb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqzfwhb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:more-horizontal"} {...others} />);
}

export default Component;
