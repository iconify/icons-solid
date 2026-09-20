import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x04hbkbty.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="x04hbkbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:checkbox-unchecked"} {...others} />);
}

export default Component;
