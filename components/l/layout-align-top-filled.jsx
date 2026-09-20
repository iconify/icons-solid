import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0w1l3idh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p0w1l3idh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-align-top-filled"} {...others} />);
}

export default Component;
