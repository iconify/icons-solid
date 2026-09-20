import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jewsv4wxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jewsv4wxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:love-fill"} {...others} />);
}

export default Component;
