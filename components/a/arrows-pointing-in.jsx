import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycgy5nb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycgy5nb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:arrows-pointing-in"} {...others} />);
}

export default Component;
