import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj03jsb1k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj03jsb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:bookmark-fill-24"} {...others} />);
}

export default Component;
