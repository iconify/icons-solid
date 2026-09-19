import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw0dv0bke.css';
import '../../css/w/wq2m00b2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hw0dv0bke"/><path class="wq2m00b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-copy"} {...others} />);
}

export default Component;
