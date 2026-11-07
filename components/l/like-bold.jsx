import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7mkfke0q.css';
import '../../css/o/oc7jq_r_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t7mkfke0q"/><path class="oc7jq_r_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:like-bold"} {...others} />);
}

export default Component;
