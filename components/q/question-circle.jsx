import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3m_32d1b.css';
import '../../css/m/mvqkmbccf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3m_32d1b"/><path class="mvqkmbccf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:question-circle"} {...others} />);
}

export default Component;
