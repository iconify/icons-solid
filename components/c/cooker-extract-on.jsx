import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5tfsv9lo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5tfsv9lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:cooker-extract-on"} {...others} />);
}

export default Component;
