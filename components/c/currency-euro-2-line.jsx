import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1_vmfbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1_vmfbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-euro-2-line"} {...others} />);
}

export default Component;
