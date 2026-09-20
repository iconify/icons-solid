import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utak5gbby.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utak5gbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:direction"} {...others} />);
}

export default Component;
