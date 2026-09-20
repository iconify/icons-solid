import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_9y1h6ym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o_9y1h6ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:crowdsource"} {...others} />);
}

export default Component;
