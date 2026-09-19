import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on57_q5jc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="on57_q5jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:podcast"} {...others} />);
}

export default Component;
