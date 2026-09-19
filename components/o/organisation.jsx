import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy8t_d1rc.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="jy8t_d1rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:organisation"} {...others} />);
}

export default Component;
