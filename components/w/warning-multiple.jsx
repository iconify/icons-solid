import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w80zo3biu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w80zo3biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:warning-multiple"} {...others} />);
}

export default Component;
