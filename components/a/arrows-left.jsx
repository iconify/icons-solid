import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr1-xddal.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dr1-xddal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrows-left"} {...others} />);
}

export default Component;
