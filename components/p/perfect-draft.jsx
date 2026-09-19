import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auo_0gbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auo_0gbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:perfect-draft"} {...others} />);
}

export default Component;
