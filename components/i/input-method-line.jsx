import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aph27i7aq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aph27i7aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:input-method-line"} {...others} />);
}

export default Component;
