import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u63w3k6_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u63w3k6_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:escalator-down-fill"} {...others} />);
}

export default Component;
