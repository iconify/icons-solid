import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqq92b05g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bqq92b05g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:spectrum-line"} {...others} />);
}

export default Component;
