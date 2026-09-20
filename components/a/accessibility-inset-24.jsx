import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm9g3ydmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zm9g3ydmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:accessibility-inset-24"} {...others} />);
}

export default Component;
