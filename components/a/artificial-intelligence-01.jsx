import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je3s1s1ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="je3s1s1ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-01"} {...others} />);
}

export default Component;
