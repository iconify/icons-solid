import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q30fo1bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q30fo1bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mask3-filled"} {...others} />);
}

export default Component;
