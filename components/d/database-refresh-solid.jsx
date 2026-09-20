import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jod_b1bzi.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="jod_b1bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:database-refresh-solid"} {...others} />);
}

export default Component;
