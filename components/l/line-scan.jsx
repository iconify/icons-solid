import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-1jb0b1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-1jb0b1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:line-scan"} {...others} />);
}

export default Component;
