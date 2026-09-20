import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj3b-5bwo.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-1};
const content = `<path class="aj3b-5bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:glue-f"} {...others} />);
}

export default Component;
