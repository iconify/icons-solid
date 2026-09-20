import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuzrz4s5g.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-3};
const content = `<path class="nuzrz4s5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:volume"} {...others} />);
}

export default Component;
