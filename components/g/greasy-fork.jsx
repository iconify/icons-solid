import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv1xhvbpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv1xhvbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:greasy-fork"} {...others} />);
}

export default Component;
