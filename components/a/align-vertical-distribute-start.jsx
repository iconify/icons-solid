import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2d1b9c7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2d1b9c7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:align-vertical-distribute-start"} {...others} />);
}

export default Component;
