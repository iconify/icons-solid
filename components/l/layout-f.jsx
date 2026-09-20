import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abut1pzvf.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};
const content = `<path class="abut1pzvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:layout-f"} {...others} />);
}

export default Component;
