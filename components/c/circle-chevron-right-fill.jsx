import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-06c7hcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-06c7hcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-chevron-right-fill"} {...others} />);
}

export default Component;
