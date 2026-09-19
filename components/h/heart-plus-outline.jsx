import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-qd2pbhi.css';
import '../../css/h/h2t_13bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-qd2pbhi"/><path clip-rule="evenodd" class="h2t_13bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:heart-plus-outline"} {...others} />);
}

export default Component;
