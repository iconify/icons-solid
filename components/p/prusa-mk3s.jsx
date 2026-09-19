import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfk8_9b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfk8_9b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:prusa-mk3s"} {...others} />);
}

export default Component;
