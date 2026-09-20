import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw8kqht8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kw8kqht8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:corner-right-up"} {...others} />);
}

export default Component;
