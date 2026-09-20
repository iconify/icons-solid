import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq-jsy6wg.css';
import '../../css/d/dqwchbbla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dq-jsy6wg"/><path class="dqwchbbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:analysis"} {...others} />);
}

export default Component;
