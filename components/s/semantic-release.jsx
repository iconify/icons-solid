import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uabkx0cyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uabkx0cyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:semantic-release"} {...others} />);
}

export default Component;
