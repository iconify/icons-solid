import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjrnk-4ya.css';
import '../../css/j/j02epxblr.css';
import '../../css/o/o3j-a-5dv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjrnk-4ya"/><path class="j02epxblr"/><path class="o3j-a-5dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:webhook-filled"} {...others} />);
}

export default Component;
