import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f329kgb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f329kgb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:eyeglass-fill"} {...others} />);
}

export default Component;
