import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j85uijbob.css';
import '../../css/f/ffqi_vb_s.css';
import '../../css/q/qwho9ye_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j85uijbob"/><path class="ffqi_vb_s"/><path class="qwho9ye_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-right-bold"} {...others} />);
}

export default Component;
