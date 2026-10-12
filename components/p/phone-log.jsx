import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybda85b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ybda85b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:phone-log"} {...others} />);
}

export default Component;
