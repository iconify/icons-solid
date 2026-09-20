import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib7m0zbcn.css';
import '../../css/e/ec2kgw3ko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ib7m0zbcn"/><path class="ec2kgw3ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:flip-up"} {...others} />);
}

export default Component;
