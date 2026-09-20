import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx_0q1bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx_0q1bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:scroll-vertical-lock"} {...others} />);
}

export default Component;
