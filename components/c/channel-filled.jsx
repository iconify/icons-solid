import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxg65syqu.css';
import '../../css/b/b0dccwb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fxg65syqu"/><path class="b0dccwb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:channel-filled"} {...others} />);
}

export default Component;
