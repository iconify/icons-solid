import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je2910b4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="je2910b4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:columns-24"} {...others} />);
}

export default Component;
