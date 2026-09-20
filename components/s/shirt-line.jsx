import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcbzlbc1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jcbzlbc1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shirt-line"} {...others} />);
}

export default Component;
