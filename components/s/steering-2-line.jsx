import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj-ki2brv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qj-ki2brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:steering-2-line"} {...others} />);
}

export default Component;
