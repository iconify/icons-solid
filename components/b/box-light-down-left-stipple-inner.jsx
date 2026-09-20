import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-__6xbfw.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="b-__6xbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-down-left-stipple-inner"} {...others} />);
}

export default Component;
