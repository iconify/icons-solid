import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thj3mqbqh.css';
import '../../css/u/uqi_583re.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thj3mqbqh wm-k"/><path class="uqi_583re wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:subscript"} {...others} />);
}

export default Component;
