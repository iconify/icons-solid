import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igmuzf3vd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="igmuzf3vd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xhv"} {...others} />);
}

export default Component;
