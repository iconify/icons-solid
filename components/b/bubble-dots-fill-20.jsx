import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcaj3m83n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rcaj3m83n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubble-dots-fill-20"} {...others} />);
}

export default Component;
