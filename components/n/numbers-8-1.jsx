import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4k57gbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e4k57gbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:numbers-8-1"} {...others} />);
}

export default Component;
