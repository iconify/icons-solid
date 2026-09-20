import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3zu0wnkj.css';

const viewBox = {"width":1103,"height":386};
const content = `<path class="d3zu0wnkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:motion-light"} {...others} />);
}

export default Component;
