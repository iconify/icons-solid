import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j877x6bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j877x6bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:inbox-fill"} {...others} />);
}

export default Component;
