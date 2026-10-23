import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfbvi1bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfbvi1bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:grid-2x2-check"} {...others} />);
}

export default Component;
