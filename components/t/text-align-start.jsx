import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm9pbsgds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm9pbsgds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:text-align-start"} {...others} />);
}

export default Component;
