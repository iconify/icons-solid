import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-q1p9pqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-q1p9pqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:code-branch-outline"} {...others} />);
}

export default Component;
