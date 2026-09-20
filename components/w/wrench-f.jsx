import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4j0-p4on.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};
const content = `<path class="g4j0-p4on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:wrench-f"} {...others} />);
}

export default Component;
