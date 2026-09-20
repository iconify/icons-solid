import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abl8a-bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abl8a-bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-plus-sharp"} {...others} />);
}

export default Component;
