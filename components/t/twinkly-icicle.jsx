import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvu2yvxqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvu2yvxqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:twinkly-icicle"} {...others} />);
}

export default Component;
