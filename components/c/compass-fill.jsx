import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohxr4pnsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohxr4pnsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:compass-fill"} {...others} />);
}

export default Component;
