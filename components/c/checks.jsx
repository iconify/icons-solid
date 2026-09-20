import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co5p8xbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co5p8xbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:checks"} {...others} />);
}

export default Component;
