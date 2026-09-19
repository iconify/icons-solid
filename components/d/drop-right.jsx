import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p21ha7b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p21ha7b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:drop-right"} {...others} />);
}

export default Component;
