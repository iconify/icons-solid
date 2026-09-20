import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r12dccgbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r12dccgbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:spectrum-fill"} {...others} />);
}

export default Component;
