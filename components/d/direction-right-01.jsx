import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joaz6-u6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="joaz6-u6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:direction-right-01"} {...others} />);
}

export default Component;
