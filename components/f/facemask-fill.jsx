import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdms0vy3l.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="bdms0vy3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:facemask-fill"} {...others} />);
}

export default Component;
