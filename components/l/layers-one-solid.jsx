import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juzj7mbul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juzj7mbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:layers-one-solid"} {...others} />);
}

export default Component;
