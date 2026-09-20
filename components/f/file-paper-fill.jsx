import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf6rbr4fc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf6rbr4fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:file-paper-fill"} {...others} />);
}

export default Component;
