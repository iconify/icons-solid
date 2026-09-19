import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njkt2bj_n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="njkt2bj_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:edit-large"} {...others} />);
}

export default Component;
