import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftznr0b3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftznr0b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:arrow-up-right"} {...others} />);
}

export default Component;
