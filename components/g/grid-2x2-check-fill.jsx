import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okfw9lw1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okfw9lw1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:grid-2x2-check-fill"} {...others} />);
}

export default Component;
