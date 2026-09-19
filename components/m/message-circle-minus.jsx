import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-45tw1ar.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-45tw1ar"/><path class="fu72iwgtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-circle-minus"} {...others} />);
}

export default Component;
