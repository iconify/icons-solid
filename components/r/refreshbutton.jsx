import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_pzzib7q.css';

const viewBox = {"width":717,"height":717};
const content = `<path class="q_pzzib7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:refreshbutton"} {...others} />);
}

export default Component;
